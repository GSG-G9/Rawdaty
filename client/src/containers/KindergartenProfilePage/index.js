import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';

import { Alert, Typography, Image, Carousel, Form, Button } from 'antd';
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

  const getKindergartenData = async (id) => {
    try {
      console.log('hi');
      const { data: kindergartenData } = await Axios.get(
        `/api/v1/kindergarten/${id}`
      );
      console.log({ kindergartenData });
      setKindergartenProfile(kindergartenData.data[0]);
    } catch (err) {
      let e;
      if (err.message === 'There is no kindergarten with this id') {
        e = 'لا يوجد روضة بهذا المعرف';
      } else {
        e = 'تعذر جلب بيانات الروضة ';
      }
      setError(e);
    }
  };

  const getKindergartenComments = async (id) => {
    try {
      console.log('hi');
      const { data: kindergartenReview } = await Axios.get(
        `/api/v1/kindergarten/${id}/comments`
      );
      console.log({ kindergartenReview });
      setKindergartenComments(kindergartenReview.data);
    } catch (err) {
      let e;
      if (err.message === 'There is no kindergarten with this id') {
        e = 'لا يوجد روضة بهذا المعرف';
      } else {
        e = 'تعذر جلب بيانات الروضة ';
      }
      setError(e);
    }
  };
  const onFinish = async ({ userName, comment }) => {
    console.log({ userName, comment, rating, kindergartenId });
    console.log('finish');
    try {
      const { data } = await Axios.post(
        `/api/v1/kindergarten/${kindergartenId}/comments`,
        {
          userName,
          comment,
          rating,
        }
      );
      console.log({ data });
      getKindergartenComments(kindergartenId);
    } catch (err) {
      let e;
      if (err.message === 'There is no kindergarten with this id') {
        e = 'لا يوجد روضة بهذا المعرف';
      } else {
        e = 'تعذر  ارسال التعليق  ';
      }
      setError(e);
    }
  };

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      getKindergartenData(kindergartenId);
      getKindergartenComments(kindergartenId);
    }

    return () => {
      isActive = false;
    };
  }, [kindergartenId]);
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
              height="400px"
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
                      <Image src={commentIcon} alt="comment" />
                      <span className="info-text">
                        {kindergartenProfile.rating_count} مراجعات
                      </span>{' '}
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
                      <Carousel autoplay>
                        {kindergartenProfile.image_gallery.map((e) => (
                          <div className="image-container">
                            <Image
                              width={400}
                              src={e}
                              className="slider-image"
                            />
                          </div>
                        ))}
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
                      console.log(val);
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
                  <Image src={locationIcon} alt="location" />

                  <span className="info-text">
                    {`${kindergartenProfile.location_main}  - ${kindergartenProfile.location_sub} `}
                  </span>
                </div>
                <br />
                <div>
                  <Image
                    src={price}
                    alt="price"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span className="info-text">
                    متوسط السعر
                    {`  :  ${kindergartenProfile.min_price}  - ${kindergartenProfile.max_price} ₪`}
                  </span>{' '}
                </div>
                <br />
                <div className="period">
                  <Image src={time} alt="time" />
                  <span className="info-text periods">
                    الفترة الصباحية{' '}
                    {`${kindergartenProfile.periods[0][0]} - ${kindergartenProfile.periods[0][1]} `}
                    {kindergartenProfile.periods[1] ? (
                      <div>
                        الفترة المسائية
                        {` :   ${kindergartenProfile.periods[1][0]} - ${kindergartenProfile.periods[1][1]} `}
                      </div>
                    ) : null}
                  </span>
                </div>
                <div>
                  <br />
                  <Image src={phone} alt="phone" />
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
      kindergartenId: propTypes.number,
    }).isRequired,
  }).isRequired,
};
export default KindergartenProfilePage;
