import React from 'react';
import aboutImg from '../../assets/img/about.jpg';
import './style.css';

const AboutPage = () => (
  <>
    <div className="header_image">
      <p className="header_title "> ماذا تعرف عن روضعتي ؟</p>
    </div>
    <div className="component_container">
      <h1 className="p_title">ما هي منصة روضتي ؟</h1>
      <p className="content">
        هي المنصة العربية الأولى التي تساعدكم في اختيار رياض الأطفال الأنسب لكم
        ولأبنائكم، وتوفر خدمة الوصول لرياض الأطفال الأنسب من بيوتكم عبر من
        منصتنا بناء على المكان المناسب والسعر و آراء الآباء والأمهات الأخرين، و
        يمكنكم مشاهدة كافة التفاصيل الخاصة بكل روضة من خلال الصفحة الخاصة بها,
        وتتيح لكم إضافة آرائكم و تقييماتكم الخاص بكل روض.
      </p>
      <img src={aboutImg} alt="" className="text_image" />
    </div>
  </>
);

export default AboutPage;
