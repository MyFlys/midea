//xll
import {SWIPER} from "../constants/commons"
import {ONE} from "../constants/commons"
import {TWO} from "../constants/commons"
import {FOUR} from "../constants/commons"
import {FIVE} from "../constants/commons"
//xll

//wq
import {SHOPCARTSURL} from "../constants/commons"
//wq

//xj
import  {MDLIST} from "../constants/commons";
import  {MDLISTLI} from "../constants/commons.js";
import  {DETAIL} from "../constants/commons.js";
//xj

//lz
var BDWMSHOPURLAPI = 'http://localhost:8082/addresshome'
//lz

//wjh
import  {CARTS} from "../constants/commons.js";




export default class MdList{
  //xll
  /**
   * 获取导航栏信息
   * @param cb
   */
  static getSwiper(cb) {
    fetch(SWIPER).then(response => {
      if (response.ok) {
        response.json().then(data => {
          cb(data)
          // console.log(data)
        })
      }
    })
  }
  //获取为你甄选 部分数据
  static getOne(cb) {
    fetch(ONE).then(response => {
      if (response.ok) {
        response.json().then(data => {
          cb(data)
        })
      }
    })
  }
  // 获取 附近商户 信息
  static getTwo(cb) {
    fetch(TWO).then(response => {
      if (response.ok) {
        response.json().then(data => {
          cb(data)
        })
      }
    })
  }
  // 获取火热商户信息
  static getFour(cb) {
    fetch(FOUR).then(response => {
      if (response.ok) {
        response.json().then(data => {
          cb(data)
        })
      }
    })
  }
  static getFive(cb) {
    fetch(FIVE).then(response => {
      if (response.ok) {
        response.json().then(data => {
          cb(data)
        })
      }
    })
  }

  //wq
  /**
   * 获取购物车商品列表信息
   * @param cb
   */
  static getClassifyList(cb){
    fetch(SHOPCARTSURL).then(response=>{
      if(response.ok){
        response.json().then(data=>{
          cb(data);
        })
      }
    })
  }
  //wq

  //lz
  static addresshome(cb) {
    fetch(BDWMGUILDURLAPI).then(response => {
      if (response.ok) {
        response.json().then(data => {
          cb(data)
        })
      }
    })
  }
  //lz

  //xj
  static getMdListli(cb){
    fetch(MDLIST).then(response=>{
      if(response.ok){
        response.json().then(data =>{
          cb(data);
          // console.log(data);
        })
      }
    })
  }
  static getMdListLi(cb){
    fetch(MDLISTLI).then(response=>{
      if(response.ok){
        response.json().then(data =>{
          cb(data);
          // console.log(data);
        })
      }
    })
  }
  static getDetail(id,cb){
    fetch(`http://localhost:8082/api/detail?id=${id}`).then(response=>{
    // fetch(`"DETAIL"+?id=${id}`).then(response=>{

      if(response.ok){
        response.json().then(data =>{
          cb(data);
          // console.log(data);
        })
      }
    })
  }

//  wjh
  static CartsList(cb){
    fetch(CARTS).then((response)=>{
      response.json().then((data)=>{
        cb(data);
      })
    })
  }
}


