import React from 'react';
import aboutImg from '../../assets/img/about.jpg';
import './style.css';

const AboutPage = () => (
  <>
    <div className="header_image">
      <p className="header_title"> ماذا تعرف عن روضتي ؟</p>
    </div>
    <div className="component_container">
      <div className="content-container">
        <h1 className="p_title">ما هي منصة روضتي ؟</h1>
        <p className="content">
          هي المنصة العربية الأولى التي تساعدكم في اختيار رياض الأطفال الأنسب
          لكم ولأبنائكم، وتوفر خدمة الوصول لرياض الأطفال الأنسب من بيوتكم عبر
          منصتنا بناء على المكان المناسب والسعر و آراء الآباء والأمهات الآخرين،
          و يمكنكم مشاهدة كافة التفاصيل الخاصة بكل روضة من خلال الصفحة الخاصة
          بها, وتتيح لكم إضافة آرائكم و تقييماتكم الخاص بكل روضة.
        </p>
      </div>
      <img src={aboutImg} alt="" className="text_image" />
    </div>
  </>
);

export default AboutPage;
