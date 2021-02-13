import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';
import { Alert, Typography, Image } from 'antd';
import Loading from '../../Components/Common/Loading';

import './style.css';

const { Title } = Typography;
const KindergartenProfilePage = ({ match }) => {
  const [kindergartenProfile, setKindergartenProfile] = useState();
  const [kindergartenComments, setKindergartenComments] = useState();
  const [error, setError] = useState(null);
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

  useEffect(() => {
    getKindergartenData(kindergartenId);
    getKindergartenComments(kindergartenId);
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
              height="10%"
              className="cover-image"
              src={kindergartenProfile.cover_image}
              preview={false}
            />
            <div className="profile-sub-container">
              <Title level={1}>{kindergartenProfile.kindergarten_name}</Title>
              <p>{kindergartenProfile.description}</p>
            </div>

            {kindergartenComments[0].user_name}
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
