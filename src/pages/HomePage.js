import React, { Fragment, useState, useEffect } from 'react'
import OurMainCampus from "../Components/OurMainCampus/OurMainCampus";
import Administration from "../Components/Administration/Administration";
import Story from "../Components/Story/Story";
import FAQ from "../Components/FAQ/FAQ";
import Header from '../Components/Header/Header';
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";
import Requirement from '../Components/Requirement/Requirement';
import Banner from "../Components/Banner/banner";
import About from '../Components/About/about';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  });

  if (loading) {
    return <Loader />
  }
  else {
  return (
    <Fragment>
      <Header/>
      <Banner/>
      <About/>
      <Requirement />
      <OurMainCampus />
      <Administration />
      <FAQ />
      <Story />
      <Footer />
    </Fragment>
  )
  }
}
