import React, { Fragment, useState, useEffect } from 'react'
import OurMainCampus from '../components/OurMainCampus/OurMainCampus';
import Administration from '../components/Administration/Administration';
import Story from "../components/Story/Story";
import FAQ from "../components/FAQ/FAQ";
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';
import Requirement from '../components/Requirement/Requirement';
import Banner from './../components/Banner/banner';
import About from '../components/About/About';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  });
  if (loading) {
    return <Loader />
  }
  else {
    return (
      <Fragment>
        <BackToTopButton />
        <Banner />
        <About />
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
