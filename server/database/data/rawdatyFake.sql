/* ADD USER */
INSERT INTO users(user_name,email,password,is_admin)
VALUES ('المسؤول','admin@admin.com','admin','true');
INSERT INTO users(user_name,email,password)
VALUES ('حلا محمد حسن','hala@hala.com','hala');
INSERT INTO users(user_name,email,password)
VALUES ('اسراء احمد يوسف','israa@israa.com','israa');
INSERT INTO users(user_name,email,password) 
VALUES ('اسامة وائل ','osama@osam.com','osama');
INSERT INTO users(user_name,email,password) 
VALUES ('الاء عماد','alaa@alaa.com','alaa');
INSERT INTO users(user_name,email,password) 
VALUES ('علاء عاصم','alser@alser.com','alser');
INSERT INTO users(user_name,email,password) 
VALUES ('محمد حسن محمد','moh@moh.com','moh');
INSERT INTO users(user_name,email,password) 
VALUES ('يوسف احمد يوسف','yousef@you.com','you');
INSERT INTO users(user_name,email,password) 
VALUES ('حنان احمد','hanan@hanan.com','hanan');
INSERT INTO users(user_name,email,password) 
VALUES ('هند محمد علي','hend@hend.com','hend');
INSERT INTO users(user_name,email,password) 
VALUES ('وفاء ابراهيم','wafaa@wafaa.com','wafa');

/* ADD LOCATIONS */
INSERT INTO locations(location_sub,location_main ) VALUES ('الرمال الجنوبي','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('الرمال الشمالي','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('النصر','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('الشيخ رضوان','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('الشجاعية','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('الزيتون','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('التفاح','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('الجلاء','غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('جباليا','شمال غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('بيت حانون','شمال غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('بيت لاهيا','شمال غزة');
INSERT INTO locations(location_sub,location_main) VALUES ('النصيرات','ألمنطقة الوسطى');
INSERT INTO locations(location_sub,location_main) VALUES ('البريج','ألمنطقة الوسطى');
INSERT INTO locations(location_sub,location_main) VALUES ('دير البلح','ألمنطقة الوسطى');
INSERT INTO locations(location_sub,location_main) VALUES ('الزهراء','ألمنطقة الوسطى');
INSERT INTO locations(location_sub,location_main) VALUES ('المغازي','ألمنطقة الوسطى');
INSERT INTO locations(location_sub,location_main) VALUES ('المغراقة','ألمنطقة الوسطى');
INSERT INTO locations(location_sub,location_main) VALUES ('خانيونس','خانيونس');
INSERT INTO locations(location_sub,location_main) VALUES ('خزاعة','خانيونس');
INSERT INTO locations(location_sub,location_main) VALUES ('عبسان','خانيونس');
INSERT INTO locations(location_sub,location_main) VALUES ('القرارة','خانيونس');
INSERT INTO locations(location_sub,location_main) VALUES ('رفح','رفح');
INSERT INTO locations(location_sub,location_main) VALUES ('الشوكة','رفح');

/* ADD KINDERGARTENS */
INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة المتميزون الحديثة',1,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127563203_2816927261908481_825163598039189311_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=EOam1iTQLIcAX8jrnEj&_nc_ht=scontent.fgza2-1.fna&oh=e1cef81bf1cebbd72a6c1f1af651e01f&oe=604638FB',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',1,'0599123456',1000,2000,ARRAY[ARRAY['7:00','11:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126072436_2810042115930329_426976181002437064_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=UX2zxNzPBTYAX_XAYLE&_nc_ht=scontent.fgza2-1.fna&oh=72a8ef5d8369f7e183116f4423bad872&oe=604613F1',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة البسمة الجميلة',2,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/143833048_4097994183544146_3972061880853700220_o.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_ohc=l5Ne-rWVonIAX8y1T2H&_nc_ht=scontent.fgza2-1.fna&oh=8c4be273b40687aecbf709e236db799a&oe=60452CF3',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',2,'0599123456',500,800,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة يا هلا النموذجية الخاصة',3,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/145371533_4926517364056683_4419031173382697234_o.jpg?_nc_cat=101&ccb=2&_nc_sid=e3f864&_nc_ohc=p8yB9sYxtWYAX9PP0Ap&_nc_ht=scontent.fgza2-1.fna&oh=ddc08b927f6773710ca251668d628d73&oe=6048B032',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',3,'0599123456',300,500,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة الأمل المشرق',4,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/145371533_4926517364056683_4419031173382697234_o.jpg?_nc_cat=101&ccb=2&_nc_sid=e3f864&_nc_ohc=p8yB9sYxtWYAX9PP0Ap&_nc_ht=scontent.fgza2-1.fna&oh=ddc08b927f6773710ca251668d628d73&oe=6048B032',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',4,'0599123456',1100,1500,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'pending','false');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة رواد الغد ',4,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/145371533_4926517364056683_4419031173382697234_o.jpg?_nc_cat=101&ccb=2&_nc_sid=e3f864&_nc_ohc=p8yB9sYxtWYAX9PP0Ap&_nc_ht=scontent.fgza2-1.fna&oh=ddc08b927f6773710ca251668d628d73&oe=6048B032',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',4,'0599123456',1000,2000,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'rejected','false');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة الزهراء النموذجية الخاصة',5,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/551059_604585486228232_1415987366_n.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_ohc=kEd6i519NhYAX8iivcY&_nc_ht=scontent.fgza2-1.fna&oh=aa8c6154da2c42b82c50adb9cfa5f5e6&oe=6045F3E5',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',5,'0599123456',500,1000,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة الحكايات الخاصة',6,'https://scontent.fgza2-1.fna.fbcdn.net/v/t31.0-8/28514422_1621885054527020_2242553309268930940_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=iw4-NXgRvCAAX8x-9zu&_nc_ht=scontent.fgza2-1.fna&oh=3acf28451a6c8f3f1a32d9b8ec609e16&oe=60464007',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',6,'0599123456',300,700,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة الأبرار النموذجية',7,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127563203_2816927261908481_825163598039189311_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=EOam1iTQLIcAX8jrnEj&_nc_ht=scontent.fgza2-1.fna&oh=e1cef81bf1cebbd72a6c1f1af651e01f&oe=604638FB',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',7,'0599123456',500,800,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126072436_2810042115930329_426976181002437064_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=UX2zxNzPBTYAX_XAYLE&_nc_ht=scontent.fgza2-1.fna&oh=72a8ef5d8369f7e183116f4423bad872&oe=604613F1',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة الخطوة الأولى ',1,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/70493523_618973001966442_4145827236705992704_n.png?_nc_cat=104&ccb=2&_nc_sid=e3f864&_nc_ohc=P8VIrCHJFFMAX9b8YtF&_nc_ht=scontent.fgza2-1.fna&oh=fa1b9d84778f64b3492b9203bb5eb777&oe=604744A4',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',1,'0599123456',1000,2000,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126072436_2810042115930329_426976181002437064_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=UX2zxNzPBTYAX_XAYLE&_nc_ht=scontent.fgza2-1.fna&oh=72a8ef5d8369f7e183116f4423bad872&oe=604613F1',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة فرح ومرح النموذجية',8,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/20882862_1381420738572793_6405605080998214076_n.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_ohc=xUNX55GZgUQAX9_uQ4i&_nc_ht=scontent.fgza2-1.fna&oh=7653e5f3156f78f449ce341d60ecab0e&oe=6046DE1D',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',8,'0599123456',800,1200,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126072436_2810042115930329_426976181002437064_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=UX2zxNzPBTYAX_XAYLE&_nc_ht=scontent.fgza2-1.fna&oh=72a8ef5d8369f7e183116f4423bad872&oe=604613F1',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

INSERT INTO 
kindergartens (kindergarten_name,user_id,cover_image,description,location_id,phone_number 
,min_price,max_price,periods,image_gallery,request_status,is_enable)
VALUES ('روضة الفجر النموذجية الخاصة',9,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/603615_564933140213872_176474614_n.jpg?_nc_cat=110&ccb=2&_nc_sid=d2e176&_nc_ohc=FpuEHr77R1MAX-ox9CV&_nc_ht=scontent.fgza2-1.fna&oh=4cc0f90728bdec9ff925b73ad342ac49&oe=6046DED1',
'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',9,'0599123456',400,900,ARRAY[ARRAY['7:00','11:00'],ARRAY['12:00','3:00']],
ARRAY['https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126072436_2810042115930329_426976181002437064_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=UX2zxNzPBTYAX_XAYLE&_nc_ht=scontent.fgza2-1.fna&oh=72a8ef5d8369f7e183116f4423bad872&oe=604613F1',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5',
'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9'],'approved','true');

/* ADD COMMENTS */
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(1,'محمد أحمد','هذه روضة رائعة وأتمنى لها دوام التميز والنجاح',5);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(1,'حنين سامي','هذه الروضة جيدة ',3);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(1,'سمر فريد','مؤسسة متميزة انصح الجميع باختيارها',5);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(1,'صلاح صالح','روضة متميزة كنت سعيدا بالتعامل معها',4);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(2,'صلاح صالح','روضة متميزة كنت سعيدا بالتعامل معها',4);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(4,'صلاح صالح','روضة متميزة كنت سعيدا بالتعامل معها',4);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(2,'هشام علي','لدي اعتراض على اسلوب هذه الروضة في التعامل مع الاطفال ',1);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(3,'صلاح صالح','روضة متميزة كنت سعيدا بالتعامل معها',4);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(6,'سمر فريد','مؤسسة متميزة انصح الجميع باختيارها',5);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(7,'محمد أحمد','هذه روضة جيدة',3);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(8,'محمد أحمد','هذه روضة رائعة وأتمنى لها دوام التميز والنجاح',4);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(9,'محمد أحمد','هذه روضة رائعة وأتمنى لها دوام التميز والنجاح',5);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(10,'محمد أحمد','هذه روضة رائعة وأتمنى لها دوام التميز والنجاح',5);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(7,'حنين سامي','هذه الروضة جيدة ',2);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(8,'حنين سامي','هذه الروضة جيدة ',3);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(9,'حنين سامي','هذه الروضة جيدة ',2);
INSERT INTO comments(kindergarten_id,user_name,comment,rating)
VALUES(10,'حنين سامي','هذه الروضة جيدة ',3);
