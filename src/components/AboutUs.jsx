import React from 'react';
import Header from './Header&Footer/Header/Header';
import Footer from './Header&Footer/Footer/footer';

export default function AboutUs() {
    return (
        <div>
            <Header/>
                <div className={'about-us'} >
                    <h1>درباره ی سایت</h1>
                    <p>پروژه ی سایت چیستان یک پروژه ی آزمایشی React و Django به وسیله ی API است که مشاهده میکنید. این اپلیکیشن شامل صفحات لیست معما ، صفحه ی معما و صفحه ی ثبت نام است. کاربر پس از ثبت نام در سایت و لاگین در آن میتواند منوی پایین را داشته باشد، جواب های دیگران را ببیند و به معما ها پاسخ دهد و انها را لایک و یا دیسلایک کند و در صورت لاگین نبودن امکان انجام این موارد را ندارد.</p>
                    <div className={'about-us__footer'}>
                        <span>لینک پروژه در گیت هاب</span> <br />
                        <a href="https://github.com/UZ-Group/chistan" target={'_blank'}>چیستان</a>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
