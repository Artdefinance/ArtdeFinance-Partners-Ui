/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import SortableList from 'react-sortable-list';
import Dialog from '@material-ui/core/Dialog';
import { ToastContainer, toast } from 'react-toastify';
import './Regist.scss';
import {
  Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,
} from 'react-accessible-accordion';
import FileDragDrop from '../Components/FileDragDrop/FileDragDrop';
import Button from '../Components/Button/Button';
import ButtonGray from '../Components/Button/ButtonGray';
import Input from '../Components/Inputs/Input';
import Checkbox from '../Components/Inputs/Checkbox';
import RadioButton from '../Components/Button/RadioButton';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';

export default class ArtworksRegist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn1: false,
      isToggleOn2: false,
      isToggleOn3: false,
      isToggleOn4: false,
      isToggleOn5: false,
      totalByte: 0,
      open: false,
      dummyImg: 'https://www.worldhistory.org/img/r/p/500x600/15460.png',
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickClose = this.clickClose.bind(this);
    this.checkByte = this.checkByte.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(e) {
    console.log(e.target.value);
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  openDialog(e) {
    this.setState({ open: true });
    // this.setState({ open: e.target.value });
  }

  clickClose(e) {
    this.setState(() => ({
      [e.target.value]: false,
    }));
  }

  checkByte(e) {
    const message = e.target.value;
    let currentBytes = 0;
    let totalBytes = 0;

    for (let i = 0; i < message.length; i += 1) {
      currentBytes = message.charCodeAt(i);
      if (currentBytes > 128) totalBytes += 2;
      else totalBytes += 1;
    }
    this.setState(() => ({
      totalByte: totalBytes,
    }));
  }

  render() {
    const artistList = [
      {
        id: 1,
        value: 'Vincent van Gogh',
        title: 'Vincent van Gogh',
      },
      {
        id: 2,
        value: 'Paul Gauguin',
        title: 'Paul Gauguin',
      },
      {
        id: 3,
        value: 'Henri Émile Benoît Matisse',
        title: 'Henri Émile Benoît Matisse',
      },
      {
        id: 4,
        value: 'Pablo Ruiz Picasso',
        title: 'Pablo Ruiz Picasso',
      },
      {
        id: 5,
        value: 'Frida Kahlo de Rivera',
        title: 'Frida Kahlo de Rivera',
      },
    ];

    const {
      isToggleOn1, isToggleOn2, isToggleOn3,
      isToggleOn4, isToggleOn5,
      totalByte, open, dummyImg,
    } = this.state;

    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, zIndex: -1 },
    };

    const ExhibitionHistory = [
      { id: 1, year: '2021', Location: 'Artdefinance GalleryArtdefinance GalleryArtdefinance GalleryArtdefinance GalleryArtdefinance Gallery', Country: 'South KoreaSouth KoreaSouth KoreaSouth KoreaSouth Korea.' },
      { id: 2, year: '2020', Location: 'Artdefinance Gallery ', Country: 'South KoreaSouth KoreaSouth KoreaSouth KoreaSouth Korea.' },
      { id: 3, year: '2017', Location: 'Artdefinance Gallery ', Country: 'South KoreaSouth KoreaSouth KoreaSouth KoreaSouth Korea.' },
    ];

    function toastSuccess() {
      toast(
        <div className="toastify__custom">
          <Icons shape="checkbox" color="#ffffff" />
          Two line text string with two actions. One to two lines is preferable on mobile and tablet
        </div>,
        {
          position: 'bottom-center',
          className: 'toast__custom-success',
        },
      );
    }

    return (
      <div className="main_regist">
        <div className="main_regist-wrap">
          <div className="head">
            <p>
              Artworks Registration
            </p>
            <span>
            You can register the artist&apos;s work and proceed with curation.
            <br />
            Please prepare a photo of the work and a certificate of authenticity
            before registering the work.
            </span>
          </div>
          <Accordion>
            <div className="regist__form">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="form__head">
                      <span>Requisite (0/7)</span>
                      <p>Artwork Details</p>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="form__body">
                    <div className="form__inputs">
                      <div className="form__title form__title--need">Artist</div>
                      <Dropdown
                        dropClass="artist_list"
                        dropHeight="36px"
                        dropTitle={[<Icons shape="search" width="24px" height="24px" color="#BBBBBB" />, 'Please select an artist']}
                        content={artistList}
                      />
                      <div className="warning__message">
                        <span className="warning__text">Supporting Text</span>
                      </div>
                    </div>

                    <div className="form__inputs">
                      <div className="form__title form__title--need">
                        Market Type
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn1"
                          />
                          <motion.div
                            animate={
                              isToggleOn1 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            실물이 포함된 작품 또는 오직 디지털 파일로 구성된 작품 중 작품의 유형을 선택할 수 있습니다.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn1"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="button-position">
                        <RadioButton content="Default" value="option1" name="option1" widthStyle="368px" />
                        <RadioButton content="Default" value="option2" name="option2" widthStyle="368px" />
                      </div>
                    </div>

                    <div className="form__inputs form_multi">
                      <div>
                        <div className="form__title form__title--need">Creation Year</div>
                        <Input value="" placeholder="Text" />
                        <div className="warning__message">
                          <span className="warning__text">Supporting Text</span>
                        </div>
                      </div>
                      <div>
                        <div className="form__title form__title--need">
                          Edition
                          <div className="question-bubble">
                            <button
                              type="button"
                              onClick={this.handleClick}
                              className="question-bubble__mark"
                              value="isToggleOn2"
                            />
                            <motion.div
                              animate={
                                isToggleOn2 === true ? style.open : style.closed
                              }
                              className="question-bubble__wrap"
                              style={{ top: '-85px', left: '-115px' }}
                            >
                              원본 작품 이외에 복수로 제작된
                              <br />
                              작품이면 에디션 정보를 입력해주세요.
                              <button
                                type="button"
                                onClick={this.clickClose}
                                className="question-bubble__close"
                                value="isToggleOn2"
                              />
                            </motion.div>
                          </div>
                        </div>
                        <Input value="" placeholder="Text" />
                        <div className="warning__message">
                          <span className="warning__text">Supporting Text</span>
                        </div>
                      </div>
                    </div>

                    <div className="form__inputs">
                      <div className="form__title form__title--need">Medium</div>
                      <Input value="" placeholder="Text" />
                      <div className="warning__message">
                        <span className="warning__text">Supporting Text</span>
                      </div>
                    </div>

                    <div className="form__inputs">
                      <div className="form__title form__title--need">
                        Artist Sign
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn3"
                          />
                          <motion.div
                            animate={
                              isToggleOn3 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            작품에 작가의 사인이 포함 여부를
                            <br />
                            선택할 수 있습니다.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn3"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="button-position">
                        <RadioButton content="Include Signed" value="option2-1" name="option2-1" widthStyle="368px" />
                        <RadioButton content="Unsigned" value="option2-2" name="option2-2" widthStyle="368px" />
                      </div>
                    </div>

                    <div className="form__inputs">
                      <div className="form__inputs-head">
                        <div className="form__title form__title--need">
                          Dimensions
                          <div className="question-bubble">
                            <button
                              type="button"
                              onClick={this.handleClick}
                              className="question-bubble__mark"
                              value="isToggleOn4"
                            />
                            <motion.div
                              animate={
                                isToggleOn4 === true ? style.open : style.closed
                              }
                              className="question-bubble__wrap"
                              style={{ top: '-85px', left: '-115px' }}
                            >
                              작품의 크기와 두께 또는 너비를 입력하십시오.
                              <br />
                              조형물이나 프레임이 포함된 작품인 경우 두께 정보도 함께 보내주세요.
                              <button
                                type="button"
                                onClick={this.clickClose}
                                className="question-bubble__close"
                                value="isToggleOn4"
                              />
                            </motion.div>
                          </div>
                        </div>
                        <div className="radio_inputs">
                          <label htmlFor="default-radio1">
                            <input type="radio" id="default-radio1" name="default-radio" />
                            <span />
                            Cm
                          </label>
                          <label htmlFor="default-radio2">
                            <input type="radio" id="default-radio2" name="default-radio" />
                            <span />
                            In
                          </label>
                        </div>
                        <div className="depth_check">
                          <Checkbox
                            chkId="depthchk"
                            content="Depth check"
                          />
                          <Icons shape="exclama20" width="20px" height="20px" color="#366DFC" />
                        </div>
                      </div>
                    </div>
                    <div className="form__inputs form_multi">
                      <div>
                        <Input value="" placeholder="Text" />
                        <div className="sub__message">
                        W 202.7cm
                        </div>
                      </div>
                      <div>
                        <Input value="" placeholder="Text" />
                        <div className="sub__message">
                        D 0cm
                        </div>
                      </div>
                      <div>
                        <Input value="" placeholder="Text" />
                        <div className="sub__message">
                        H 202.6cm
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="form__head">
                      <span>Requisite (0/7)</span>
                      <p>Artwork Details</p>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="form__body">
                    <div className="form__inputs">
                      <div className="form__title form__title--need">
                        Artwork(Main)
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn2"
                          />
                          <motion.div
                            animate={
                              isToggleOn2 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            큐레이션 또는 마켓 플레이스에서 리스트로 보여지며, NFT로 저장되는 이미지입니다.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn2"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="side-regist__drag-drop">
                        <FileDragDrop boxType="multiple_container" />
                      </div>
                    </div>
                    <div className="form__inputs">
                      <div className="form__title form__title--need">
                        Artwork(Sub)
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn2"
                          />
                          <motion.div
                            animate={
                              isToggleOn2 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            작품의 측면이나 다양한 각도에서 촬영한 이미지를 추가할 수 있습니다.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn2"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="side-regist__drag-drop">
                        <FileDragDrop boxTypeClass="multiple_container" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="form__body">
                    <div className="form__inputs">
                      <div className="form__title form__title--need">
                        Condition
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn2"
                          />
                          <motion.div
                            animate={
                              isToggleOn2 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            작품의 컨디션 또는 상태를 입력해주세요.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn2"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <Input value="" placeholder="Text" />
                      <div className="warning__message">
                        <span className="warning__text">Supporting Text</span>
                      </div>
                    </div>
                    {/* <div className="form__inputs"> */}
                    <div className="form__inputs form__error">
                      <div className="form__title form__title--need">
                        Work Introduction
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn2"
                          />
                          <motion.div
                            animate={
                              isToggleOn2 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            작가의 작품에 대한 의도나 작품을 잘 표현할 수 있는 내용으로 작성을 해주세요.
                            <br />
                            내용은 2,000 Byte 이내로만 작성 가능합니다.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn2"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="textarea_box">
                        <textarea
                          placeholder="Type your contents here."
                          onKeyUp={this.checkByte}
                          maxLength={2000}
                        />
                        <div className="byte__check">
                          <p>{totalByte}</p>
                          <p>/2000 byte</p>
                        </div>
                      </div>
                    </div>

                    <div className="form__inputs">
                      <div className="form__title form__title--need">
                        Certificate of Authenticity
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn2"
                          />
                          <motion.div
                            animate={
                              isToggleOn2 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            작가 또는 갤러리에서 보증하는 작품의 진품 인증서를 등록해주세요.
                            <br />
                            등록된 진품 인증서는 NFT로 저장되어 작품을 소유한 사람만 확인이 가능합니다.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn2"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="side-regist__drag-drop">
                        <FileDragDrop boxType="multiple_container" />
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="form__head">
                      <p>Exhibition History</p>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="form__body">
                    <div className="form_util">
                      <button type="button" className="btn_addhistory">
                        <Icons shape="plus" width="24px" height="24px" color="#5F44FF" />
                        <span>Add to History</span>
                      </button>
                    </div>
                    <div className="sortable_head">
                      <div className="year">Years</div>
                      <div className="location">Location</div>
                      <div className="country">Country</div>
                      <div className="del"><span className="a11y">delete</span></div>
                    </div>
                    <div className="sortable_wrap exhibition_history">
                      <SortableList
                        data={ExhibitionHistory.map((i) => (
                          <div className="placeholder">
                            <div className="year">{i.year}</div>
                            <div className="location">{i.Location}</div>
                            <div className="country">{i.Country}</div>
                            <div className="del">
                              <button type="button">
                                <Icons shape="close_small" color="#BBBBBB" />
                              </button>
                            </div>
                          </div>
                        ))}
                      />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
          </Accordion>

          <div className="form__fixed form_fixed-multi">
            <div>
              <Button className="button button--gray-line button--mid" content="back" type="type1" />
            </div>
            <div>
              <Button className="button button--black-line button--mid" content="Temporary Storage" type="type1" />
              <Button pressFucn={this.openDialog} value="open" className="button button--black button--mid" content="Comfirm" type="type1" />
            </div>
          </div>
          <Dialog
            fullScreen
            open={Boolean(open)}
            onClose={this.handleClose}
          >
            <div className="dialog_close" onClick={this.handleClose}>
              <Icons shape="close" width="24px" height="24px" />
              <span className="a11y">close</span>
            </div>
            <div className="dialog_wrap artworkregist_dialog">
              <div className="dialog_left">
                <div className="dialog_box dialog_detailarea">
                  <div className="detail_artimage"><img src={dummyImg} alt="dummyimg" /></div>
                  <button type="button" className="btn_expanding">
                    <Icons shape="expand" />
                    <span>View Image</span>
                  </button>
                  {/*  */}
                  <div className="detail_info">
                    <dl className="info_items">
                      <dt>Artist</dt>
                      <dd>Vincent van Gogh Tauba Auerbach Ryan Trecartin</dd>
                    </dl>
                    <dl className="info_items">
                      <dt>Title</dt>
                      <dd>Two Paintings (from the Paintings series) Spring Flowers</dd>
                    </dl>
                    <dl className="info_items">
                      <dt>Creation Year</dt>
                      <dd>2001</dd>
                    </dl>
                    <dl className="info_items">
                      <dt>Edition</dt>
                      <dd>#3547A</dd>
                    </dl>
                    <dl className="info_items">
                      <dt>Medium</dt>
                      <dd>Screenprint in colors on Saunders Waterford 425gsm pape</dd>
                    </dl>
                    <dl className="info_items">
                      <dt>Artist Sign</dt>
                      <dd>Include Signed</dd>
                    </dl>
                    <dl className="info_items">
                      <dt>Dimensions</dt>
                      <dd>
                        W 203.2 × D 203.2 cm x H 203.2 cm
                        <br />
                        (80 × 80 × 80 in.)
                      </dd>
                    </dl>
                    <dl className="info_items">
                      <dt>Edition</dt>
                      <dd>#3547A</dd>
                    </dl>
                  </div>
                  {/*  */}
                </div>
                <div className="dialog_box dialog_exhibihistory">
                  <p className="row_title">ExhibitionHistory</p>
                  <div className="row_scroll">
                    {ExhibitionHistory.map((i) => (
                      <div className="row_items">
                        <p className="year">{i.year}</p>
                        <p className="content">{i.Location}</p>
                        <p className="location">
                          {i.Country}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="dialog_right">
                <div className="dialog_box registration_detail">
                  <div className="dialog_regist-head">
                    Artworks Registration
                    <button type="button" className="btn_delete">
                      <Icons shape="trash" />
                      <span className="a11y">Delete</span>
                    </button>
                  </div>
                  <div className="dialog_regist-cont">
                    <p className="desc">
                    After setting the expected price for the artist&lsquo;s work,
                    each art expert&lsquo;s curation and Participants&lsquo;
                    DAO voting determines the final value of the work.
                    <br />
                    After voting, you can choose the form of sale
                    (Auction or List Price).
                    <br />
                    You can choose to register on the market.
                    </p>
                    <div className="suggest_price">
                      <div className="title">
                        Suggested Price
                        <div className="question-bubble">
                          <button
                            type="button"
                            onClick={this.handleClick}
                            className="question-bubble__mark"
                            value="isToggleOn1"
                          />
                          <motion.div
                            animate={
                              isToggleOn1 === true ? style.open : style.closed
                            }
                            className="question-bubble__wrap"
                            style={{ top: '-85px', left: '-115px' }}
                          >
                            작품의 예상 가격을 USD 기준으로 입력해주세요.
                            <button
                              type="button"
                              onClick={this.clickClose}
                              className="question-bubble__close"
                              value="isToggleOn1"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="rate_exchange">
                        <p>1USDT = $3.765</p>
                        <p>
                          <span>22/06/2022</span>
                          <span>16 : 18 : 23 (UTC+3) Last Updates</span>
                        </p>
                      </div>
                      <div className="price_box">
                        <Icons shape="data" width="20px" height="20px" />
                        <Input value="1,500,000.00" />
                        <span className="unit">USD</span>
                      </div>
                      <div className="crypto_currency">
                        <Icons shape="binance" width="14px" height="14px" viewBox="0 0 14 14" />
                        0.00
                        <span className="unit">USDT</span>
                      </div>
                      {/* <div className="warning__message type__error">
                        <Icons shape="warning" color="#FF3B30" />
                        <span className="warning__text">
                          Supporting Text
                        </span>
                      </div> */}
                      <div className="nft_infomation">
                        <p className="info">Please check the information of the work before NFT minting once more!</p>
                        <div className="waller_addr bubble-position">
                          <p>NFT Minted wallet address</p>
                          <div className="addr_text">
                            0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0
                            <button
                              type="button"
                              onClick={this.handleClick}
                              className="btn_bubbleshow"
                              value="isToggleOn5"
                            />
                          </div>
                          {isToggleOn5 ? (
                            <div className="bubble bubble-top-right">
                            NFTs are stored with the wallet address you log in to.
                            Stored NFTs can be moved to another wallet address,
                            but Curation and market registration are not possible,
                            so please check the wallet address to be stored again.
                            Once the information of the work is stored with NFT,
                            it cannot be canceled or deleted afterwards.
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="bottom_info">
                      <p className="text">
                      Minting work information with NFT on the blockchain
                      <br />
                      network A certain fee is charged for executing
                      a transaction or smart contract.
                      <br />
                      If there is not enough balance such as fees in the account wallet,
                      NFT minting is not possible.
                      <br />
                      Before minting, please make sure you have enough balance to pay the fee.
                      </p>
                      <p className="text">
                      As a platform provider, ADF Labs Co., Ltd.
                      is a platform provider for curators, voters, and collectors.
                      <br />
                      Works, artwork information provided in
                      all participation processes and art transactions,
                      The responsibility and responsibility
                      for the transaction rests with the gallery.
                      </p>
                    </div>
                    <div className="btn_wrap">
                      <ToastContainer
                        autoClose={false}
                        closeOnClick
                        rtl={false}
                      />
                      <ButtonGray className="button button--gray-line button--mid" content="Back" />
                      <Button pressFucn={() => toastSuccess()} className="button button--black button--mid" content="Confirm" type="type1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    );
  }
}
