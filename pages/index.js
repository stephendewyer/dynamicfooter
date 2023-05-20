import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import ExternalLinkButton from '../components/external_link_button/ButtonExternalLink';
import ExternalLinkIcon from '../public/images/icons/external_link_icon.svg';

export default function Index() {

  return (
    <Fragment>
      <Head>
        <title>dynamic footer</title>
        <meta name="description" content="an accessible, dynamic, responsive and variable height footer" />
        <meta property="og:image" content="/images/spoon_and_cherry_02.jpg" />
        <meta property="og:url" content="https://dynamicfooter.vercel.app/" />
      </Head>
      <div
        className={styles.container} 
      >
          <h1 className={styles.heading_01}>
            dynamic footer
          </h1>
          <div className={styles.about_section}>
            <div className={styles.features}>
              <h2 className={styles.heading_02} >
                features:
              </h2>
              <ul>
                <li>
                  footer stays at the page bottom if the page content height is less than the viewport height
                </li>
                <li>
                  footer begins only after the page content if the viewport height is less than the page content height
                </li>
                <li>
                  responsive
                </li>
                <li>
                  accessible following WCAG 2.1 standards
                </li>
                <li>
                  dynamic
                </li>
                <li>
                  variable height
                </li>
              </ul>  
            </div>
            <div className={styles.link_to_code}>
              <h2 className={styles.heading_02} >
                code:
              </h2>
              <Link
                href="https://github.com/stephendewyer/dynamicfooter"
                passHref={true}
                aria-label="link to dynamic footer on GitHub"
                target="_blank"
                rel="noopener noreferrer">

                <ExternalLinkButton>
                  <div>
                    GitHub
                  </div> 
                  <div className={styles.external_link_icon} >
                    <Image src={ExternalLinkIcon} layout="responsive" alt="external link icon"/>
                  </div>
                </ExternalLinkButton>

              </Link>
            </div>
          </div>
        <h2 className={styles.credits} >
            designed and developed by <Link href="https://www.stephendewyerwebwork.com" passHref={true} target="_blank" aria-label="link to portfolio website of stephen garrett dewyer">stephen garrett dewyer</Link>
        </h2>
      </div>
    </Fragment>
  );
}
