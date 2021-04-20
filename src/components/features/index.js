import React from 'react';
import { Container, BoxFeatures, BoxAbout } from './styles';
import FeaturesSVG from '../../assets/img/png-features.png';
import IconFiles from '../../assets/img/icon-files.svg';
import iconPay from '../../assets/img/icon-pay.svg';

function Features() {
    return (
      <Container>
        <BoxFeatures>
        <div className="container">
          <div className="row">
          <div className="col-md-6">
          <h6 className="boxFeatures__subTitle">Features</h6>
          <h2 className="boxFeatures__Title">PandaPlag Plagiarism Checker scans 20 billions contents</h2>
          <p className="boxFeatures__Text">We will open your document and compare your content with more <strong>20 billions contents</strong>, finishing it, you will have in hand everything is wrong with your document and can make decisions to make your document safe.</p>
          <BoxAbout>
            <div className="boxAbout__card__icon">
              <img src={IconFiles} alt=""/>
            </div>
            <div className="boxAbout__card__text">
              <h6>Work with Word(.doc, .docx), PDF and TXT</h6>
              <p>We are ready to analize four file type, the most knowed in the market, Word(.doc, .docx), PDF e TXt files, just drop your file on our droparea and be ready to know what's wrong with your content.</p>
            </div>
          </BoxAbout>
          <BoxAbout>
            <div className="boxAbout__card__icon">
              <img src={iconPay} alt=""/>
            </div>
            <div className="boxAbout__card__text">
              <h6>Pay only if you want to see deep inside</h6>
              <p>Or can use our Plagiarism Checker for free, you have to pay only if you want to see where the plagium is, in this case you can use PayPal to pay us and we will delivery the data to you.</p>
            </div>
          </BoxAbout>
      </div>
          <div className="col-md-6">
            <img src={FeaturesSVG} className="w-100" alt=""/>
          </div>
          </div>
        </div>
        </BoxFeatures>
      </Container>
    )
}

export default Features;