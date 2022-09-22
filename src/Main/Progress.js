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

export default class ArtworksProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main_regist">
        progress
      </div>
    );
  }
}
