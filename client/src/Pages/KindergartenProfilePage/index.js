import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import {
  Alert,
  Typography,
  Image,
  Carousel,
  Form,
  Button,
  message,
} from 'antd';
import Spinner from '../../Components/Common/Spinner';
import Rating from '../../Components/Common/Rating';
import MainInput from '../../Components/Common/MainInput';
import CommentContainer from '../../Components/CommentContainer';
import locationIcon from '../../assets/icons/location1.svg';
import price from '../../assets/icons/price.svg';
import time from '../../assets/icons/time.svg';
import phone from '../../assets/icons/phone.svg';
import commentIcon from '../../assets/icons/comment.svg';

import './style.css';

const { Title } = Typography;

const KindergartenProfilePage = ({ match }) => {
  const [kindergartenProfile, setKindergartenProfile] = useState();
  const [kindergartenComments, setKindergartenComments] = useState();
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const { kindergartenId } = match.params;

  // fetch all comments on this kindergarten
  const getKindergartenComments = async (id) => {
    try {
      const { data: kindergartenReview } = await axios.get(
        `/api/v1/kindergarten/${id}/comments`
      );
      setKindergartenComments(kindergartenReview.data);
    } catch (err) {
      let e;
      if (err.response.data.message === 'There is no comments for this id') {
        e = null;
      } else {
        e = 'تعذر جلب بيانات الروضة ';
      }
      setError(e);
    }
  };

  // Fetch kindergarten data
  const getKindergartenData = async (id) => {
    try {
      const { data: kindergartenData } = await axios.get(
        `/api/v1/kindergarten/${id}`
      );
      setKindergartenProfile(kindergartenData.data[0]);
    } catch (err) {
      let e;
      if (
        err.response.data.message === 'There is no kindergarten with this id'
      ) {
        e = 'لا يوجد روضة بهذا المعرف';
      } else {
        e = 'تعذر جلب بيانات الروضة ';
      }
      setError(e);
    }
  };

  // add a new comment
  const onFinish = async ({ userName, comment }) => {
    try {
      const { data } = await axios.post(
        `/api/v1/kindergarten/${kindergartenId}/comments`,
        {
          userName,
          comment,
          rating,
        }
      );
      getKindergartenComments(kindergartenId);
      if (data.length !== 0) {
        message.success('تم إضافة التعليق بنجاح');
      }
    } catch (err) {
      let e;
      if (err.message === 'There is no kindergarten with this id') {
        e = 'لا يوجد روضة بهذا المعرف';
      } else {
        e = 'تعذر  ارسال التعليق  ';
      }
      message.error(e);
    }
  };

  // fetch the data when the kindergarten id change
  useEffect(() => {
    let isActive = true;
    if (isActive) {
      getKindergartenComments(kindergartenId);
      getKindergartenData(kindergartenId);
    }
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="profile-container">
      {
        // eslint-disable-next-line no-nested-ternary
        error ? (
          <Alert
            message={error}
            description="لا يمكن ايجاد البيانات"
            type="error"
            showIcon
          />
        ) : kindergartenProfile ? (
          <div>
            <Image
              width="100%"
              height="414px"
              className="cover-image"
              src={kindergartenProfile.cover_image}
              preview={false}
            />
            <div className="profile-sub-container">
              <div className="right-container">
                <div>
                  <Title
                    level={1}
                    className="title"
                    style={{ color: '#739c98', fontSize: '3rem' }}
                  >
                    {kindergartenProfile.kindergarten_name}
                  </Title>
                  <div className="sub-info">
                    <span className="rating-avg">
                      <Rating rateValue={kindergartenProfile.rating_average} />
                      <span className="info-text">
                        {kindergartenProfile.rating_average}
                      </span>
                    </span>

                    <span className="reviewer">
                      <Image src={commentIcon} alt="comment" preview={false} />
                      <span className="info-text">
                        {kindergartenProfile.rating_count} مراجعات
                      </span>
                    </span>
                  </div>
                  <p className="desc">{kindergartenProfile.description}</p>
                  <div>
                    <Title
                      level={2}
                      className="sub-title"
                      style={{ color: '#739c98' }}
                    >
                      المزيد من الصور
                    </Title>

                    <div className="carousal-container">
                      <Carousel autoplay adaptiveHeight>
                        {JSON.parse(kindergartenProfile.image_gallery).map(
                          (e) => (
                            <div className="image-container">
                              <Image src={e} className="slider-image" />
                            </div>
                          )
                        )}
                      </Carousel>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <Title
                    level={2}
                    className="sub-title"
                    style={{ color: '#739c98' }}
                  >
                    ماذا يقول الناس
                  </Title>
                  <CommentContainer
                    data={kindergartenComments}
                    isAdmin={false}
                  />
                </div>
                <Form onFinish={onFinish}>
                  <Form.Item name="userName">
                    <MainInput type="text" placeholder="أدخل اسمك ..." />
                  </Form.Item>
                  <Form.Item name="comment">
                    <MainInput type="textArea" placeholder="أدخل تعليقك ..." />
                  </Form.Item>
                  <span className="info-text rev-text">تقييمك :</span>{' '}
                  <Rating
                    setRating={(val) => {
                      setRating(val);
                    }}
                  />
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="add-button"
                      style={{
                        backgroundColor: 'var(--main-color)',
                        border: 'var(--button-border)',
                        color: 'var(--main-white)',
                        size: 'large',
                      }}
                    >
                      أضف تعليق
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="information">
                <Title level={3} style={{ margin: '10px auto' }}>
                  معلومات عنا
                </Title>
                <div className="sub-info">
                  <Image src={locationIcon} alt="location" preview={false} />

                  <span className="info-text">
                    {`${kindergartenProfile.location_main}  - ${kindergartenProfile.location_sub} `}
                  </span>
                </div>
                <br />
                <div>
                  <Image
                    src={price}
                    alt="price"
                    preview={false}
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span className="info-text">
                    متوسط السعر
                    {`  :  ${kindergartenProfile.min_price}  - ${kindergartenProfile.max_price} ₪`}
                  </span>{' '}
                </div>
                <br />
                <div className="period">
                  <Image src={time} alt="time" preview={false} />
                  <span className="info-text periods">
                    الفترة الصباحية{' '}
                    {`${JSON.parse(kindergartenProfile.periods)[0][0]} - ${
                      JSON.parse(kindergartenProfile.periods)[0][1]
                    } `}
                    {JSON.parse(kindergartenProfile.periods)[1] ? (
                      <div>
                        الفترة المسائية
                        {` :   ${
                          JSON.parse(kindergartenProfile.periods)[1][0]
                        } - ${JSON.parse(kindergartenProfile.periods)[1][1]} `}
                      </div>
                    ) : null}
                  </span>
                </div>
                <div>
                  <br />
                  <Image src={phone} alt="phone" preview={false} />
                  <span className="info-text">
                    {kindergartenProfile.phone_number}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )
      }
    </div>
  );
};

KindergartenProfilePage.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      kindergartenId: propTypes.string,
    }).isRequired,
  }).isRequired,
};
export default KindergartenProfilePage;
