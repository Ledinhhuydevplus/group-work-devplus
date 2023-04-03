import React, { Fragment } from 'react'
import OurMainCampus from '../components/OurMainCampus/OurMainCampus';
import Administration from '../components/Administration/Administration';
import FAQ from "../components/FAQ/FAQ";

export default function HomePage() {
  return (
    <Fragment>
      <OurMainCampus />
      <Administration />
      <FAQ />
    </Fragment>
  )
}
