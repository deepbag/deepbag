import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap library Path
import '../Styles/Aboutme.css'; // about css path

import npm from '../Image/npm.svg'; // Technology I Used Image
import aws from '../Image/aws.svg'; // Technology I Used Image
import linux from '../Image/linux.svg'; // Technology I Used Image
import wordpress from '../Image/wordpress.svg'; // Technology I Used Image
import react from '../Image/react.svg'; // Technology I Used Image
import php from '../Image/php.svg'; // Technology I Used Image
import js from '../Image/js.svg'; // Technology I Used Image
import github from '../Image/github.svg'; // Technology I Used Image


export default function Aboutme() {

    return ( 
        <>
            {/* Knowledge I have block start */}
            <div className="doblock">
                <h3>⇀ Knowledge I Have</h3>
                <div className="doinfoblock">
                    <div className="reactblock">
                        <h4>1. React Framework ✔</h4>
                        <p>I have intermediate level experience. React is my second core skill. it's used for only on my own things.</p>
                    </div>
                    <div className="reactblock">
                        <h4>2. WordPress CMS ✔</h4>
                        <p>I have advanced level experience. I work part time as a WordPress Developer for Company or Freelancing.</p>
                    </div>
                </div>
                <div className="doinfoblock">
                    <div className="reactblock">
                            <h4>3. Figma ✔</h4>
                            <p>I have intermediate level experience. UI/UX without design creating website is not good idea.</p>
                    </div>
                    <div className="reactblock">
                            <h4>4. Cloud Computing ✔</h4>
                            <p>I have intermediate level experience. I worked multiple platform like AWS, Alibaba, Google Cloud etc.</p>
                    </div>
                </div>
                <div className="doinfoblock">
                    <div className="reactblock">
                            <h4>5. NextJs Framework ✔</h4>
                            <p>I have intermediate level experience. It has become so popular. JS rendering in the browser itself and SEO friendly.</p>
                    </div>
                    <div className="reactblock">
                            <h4>6. Malware Removing ✔</h4>
                            <p>I have advanced level experience. It's too intresting and frusted task in IT Sector.</p>
                    </div>
                </div>
            </div>
            {/* Knowledge I have block end */}

            {/* Technology I Used block start */}
            <div className="techblock">
                <h3>⇀ Technology I Used</h3>
                <div className="techsvgblock">
                    <img src={npm} alt="npm" />
                    <img src={aws} alt="aws" />
                    <img src={linux} alt="linux" />
                    <img src={wordpress} alt="wordpress" />
                    <img src={react} alt="react" />
                    <img src={php} alt="php" />
                    <img src={js} alt="js" />
                    <img src={github} alt="github" />
                </div>
            </div>
            {/* Technology I Used block end */}
        </>
    )
}
