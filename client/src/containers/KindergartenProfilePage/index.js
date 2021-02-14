import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';

import { Alert, Typography, Image, Carousel, Form, Button } from 'antd';
import Loading from '../../Components/Common/Loading';
import Rating from '../../Components/Common/Rating';
import MainInput from '../../Components/Common/MainInput';

import CommentContainer from '../../Components/CommentContainer';
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
                    style={{ color: '#739c98' }}
                  >
                    {kindergartenProfile.kindergarten_name}
                  </Title>
                  <span className="rating-avg">
                    <Rating rateValue={kindergartenProfile.rating_average} />
                    <span>{kindergartenProfile.rating_average}</span>
                  </span>

                  <span className="reviewers">
                    {kindergartenProfile.rating_count} مراجعين
                  </span>
                  <p>{kindergartenProfile.description}</p>
                  <div className="carousal-container">
                    <Carousel autoplay>
                      {kindergartenProfile.image_gallery.map((e) => (
                        <div className="image-container">
                          <Image width={400} src={e} className="slider-image" />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div>
                  <Title level={3}>ماذا يقول الناس</Title>
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

                  <Rating
                    setRating={(val) => {
                      setRating(val);
                      console.log(val);
                    }}
                  />

                  <Form.Item>
                    <Button htmlType="submit">أضف تعليق</Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="information">
                <Title level={4}>معلومات عنا</Title>
                <div>
                  {' '}
                  {`${kindergartenProfile.location_main}  - ${kindergartenProfile.location_sub}`}{' '}
                </div>
                <div>
                  متوسط السعر
                  {`  :  ${kindergartenProfile.min_price}  - ${kindergartenProfile.max_price} ₪`}
                </div>
                <div>
                  الفترة الصباحية{' '}
                  {`${kindergartenProfile.periods[0][0]} - ${kindergartenProfile.periods[0][1]} `}
                  {kindergartenProfile.periods[1] ? (
                    <div>
                      الفترة المسائية
                      {` :   ${kindergartenProfile.periods[1][0]} - ${kindergartenProfile.periods[1][1]} `}
                    </div>
                  ) : null}
                  <div>{kindergartenProfile.phone_number}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
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
