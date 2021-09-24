import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { url_set } from 'src/app/globalvar';
// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
// import { url } from 'inspector';
@Component({
  selector: 'app-restaurant-setup',
  templateUrl: './restaurant-setup.component.html',
  styleUrls: ['./restaurant-setup.component.css',
  '../../../assets/appcss.css'
]
})
export class RestaurantSetupComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id','section_name','edit'];
  displayedColumns1: string[] = ['id','item_name','edit'];
  displayedColumns2: string[] = ['id','item_desc','item_price','item_note','edit'];
 
  // dataSource = ELEMENT_DATA;
  userData:any;
  dataSource= new MatTableDataSource();
  dataSource1= new MatTableDataSource();
  dataSource2= new MatTableDataSource();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator1!: MatPaginator;
  @ViewChild(MatSort) sort1!: MatSort;


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;
  storevalue: any=[];
  specialData:any;
  menufordesc: any;
  back: any;
  idforcreatesection:any;
  value_font: boolean=false;
   value_background=true;
  value_Headertitle= true;
  menu_place: any;
  constructor(private admin_data:LagunaserviceService,private activatedRoute:ActivatedRoute) { }
 show_tab='tab1'
 pos:any;
 get_section_for_item:any;
 tab_el:any;
 logo_img:any;
 z1:any
 createsecval='';
 idata:any;
 i_data:any;
 break_cov:any;
 break_top:any;
 lunch_cov:any;
 lunch_top:any;
 brunch_cov:any;
 brunch_top:any;
 dinner_cov:any;
 ide='';
 ipr='';
 ino=''
 dinner_top:any;
 menuData:any;
 starttime:any;
 endtime:any;
 itemData:any;
 mid2:any;
 sectionitem:any;
 secData:any;
 bkmenuid:any;
 datetimeData:any;
 daycheck:any;
 k:any;
 mid1:any;
 z:any;
 spData:any;
 sec_post_data:any;
 m='';
 itemdesc:any;
 m_id='';
 menuid:any;
 aboutusData1:any;
 aboutusData:any;
 about_text_readonly:any;
 x:any;
 get_section_for_item1:any
 menu_item:any;
 sid:any;
 secval1:any;
 sp_menuid:any;
 sp_posid:any;
 sp_back:any;
 sp_font:any;
 sp_head:any;
 sp_notice:any;
 r_id:any;
 pick:any;
 ht:any;
 secid:any;
 dashboardData:any;
 rest_nm:any;
 rest_contact:any;
 rest_phone:any;
 rest_em:any;
 rest_web:any;
 rest_add:any;
 rest_monthly:any;
 rest_setup:any;
 sec_value='';
 eid2:any;
 q:any;
 sid2:any;
 i_value='';
 submit_show2=false;
 descriptionData:any;
 submit_show=false;
 iid:any;
 setTimedata:any;
 menu_url_data:any;
 menulength:any;
 url_nm:any;
 rad:any;
 item_i:any;
 veh1:any;
 mon:any=0;
 tue:any=0;
 wed:any=0;
 thur:any=0;
 fri:any=0;
 sat:any=0;
 sun:any=0;
 veh2:any;
 veh3:any;
 veh4:any;
 veh5:any;
 veh6:any;
 veh7:any;
 veh8:any;
 show_button3=false;
 url1="http://localhost:4200/menu/";
 sendpathdata="assets/the_cliff_logo.png";
 getimagepath=url_set.api_url+'/';
 imgcheck:any;
 idfordesc:any;
 mail_data:any;
  ngOnInit(): void {
    // this.daycheck=document.getElementById('1');
    //   this.daycheck.checked=true;
    this.r_id=this.activatedRoute.snapshot.params['id'];
    this.r_id=atob(this.r_id);
    console.log(this.r_id);
    this.fetchdata();
    this.fetchdata1();
    this.fetchdata2();
    this.admin_data.get_menu_url(this.r_id).subscribe(data=>{console.log(data)
      this.menu_url_data=data;
      this.menu_url_data=this.menu_url_data.msg;
      this.getimagepath=this.menu_url_data[0].image? this.getimagepath+this.menu_url_data[0].image : this.getimagepath;
      this.imgcheck=this.menu_url_data[0].image ? true : false;
      console.log("imgcheck="+this.imgcheck);
      this.menulength=this.menu_url_data.length;
      console.log("length="+this.menulength)
    })
    this.admin_data.get_specific_admin_dashboard(this.r_id).subscribe(data=>{console.log(data)
    this.dashboardData=data;
    this.dashboardData=this.dashboardData.msg;
    this.rest_nm=this.dashboardData[0].restaurant_name;
    this.url_nm=this.rest_nm.replace(' ','_');
    this.url1=this.url1+this.url_nm+'/'+btoa(this.r_id);
    console.log(this.url1)
    this.rest_contact=this.dashboardData[0].contact_name;
    this.rest_phone=this.dashboardData[0].phone_no;
    this.rest_em=this.dashboardData[0].email;
    this.rest_web=this.dashboardData[0].website;
    this.rest_monthly=this.dashboardData[0].monthly_fee;
    this.rest_setup=this.dashboardData[0].setup_fee;

    this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
    })
    this.admin_data.get_special(this.r_id).subscribe(data=>{console.log(data)
    this.specialData=data;
    this.specialData=this.specialData.msg;
    this.sp_menuid=this.specialData[0].menu_id;
    this.sp_posid=this.specialData[0].position_id;
    this.sp_back=this.specialData[0].back_color;
    this.sp_font=this.specialData[0].font_color;
    this.sp_head=this.specialData[0].header_title;
    this.sp_notice=this.specialData[0].notice_content;
    })
    this.admin_data.get_about_us(this.r_id).subscribe(data=>{console.log(data)
    this.aboutusData=data;
      this.about_text_readonly=this.aboutusData.msg[0].about_us;
    })
    
    this.bkmenuid=document.getElementById('bkmenu1');
    this.bkmenuid.checked=true;
    this.admin_data.get_sec_url(1,this.r_id).subscribe(data=>{console.log(data)
      this.secData=data;
      this.secData=this.secData.msg;
    })
    this.tab_el=document.getElementById('defaultOpen');
    this.tab_el.style.background='#3F51B5'
    this.tab_el.style.color="white";
   this.admin_data.get_menu_urls(this.r_id).subscribe((data)=>{console.log(data)
   this.menuData=data;
   this.logo_img=this.menuData.msg[0].logo_url;
  this.menuData=this.menuData.msg;
  })
  }
  open_popup_window(i_menu:any){
    this.admin_data.get_set_time(i_menu,this.r_id).subscribe(data=>{
      console.log(data)
      this.datetimeData=data;
      this.starttime=this.datetimeData.msg[0].start_time;
      this.endtime=this.datetimeData.msg[0].end_time;
    window.open('http://localhost:4200/menu/'+this.rest_nm+'/'+btoa(this.r_id+'/'+this.starttime+'/'+this.endtime),'popup','width=400,height=500')

    })
    // this.admin_data.get_menu_by_time()
    
  }
  gen_code(){
    this.getimagepath=url_set.api_url+'/';
    this.admin_data.get_qrcode({url: this.url1, res_id: this.r_id, img: this.sendpathdata}).subscribe(data=>{console.log(data)
      this.menu_url_data=data;
      console.log({dt: this.menu_url_data});
      
      this.menu_url_data=this.menu_url_data.msg;
      // this.getimagepath=this.getimagepath+this.menu_url_data[0].image
      // this.imgcheck=this.menu_url_data[0].image ? true : false;

      this.menulength=this.menu_url_data.length;
      console.log("length="+this.menulength)
      this.admin_data.get_menu_url(this.r_id).subscribe(data1=>{console.log(data1)
        this.menu_url_data=data1;
        this.menu_url_data=this.menu_url_data.msg;
        this.getimagepath=this.getimagepath+this.menu_url_data[0].image
        this.imgcheck=this.menu_url_data[0].image ? true : false;
        console.log("imgcheck="+this.imgcheck);
        this.menulength=this.menu_url_data.length;
        console.log("length="+this.menulength)
      })
    })
  }
  fetchdata(){
    
    this.admin_data.get_section_data(this.r_id,'').subscribe(data=>{console.log(data)
      this.get_section_for_item=data;
      this.get_section_for_item=this.get_section_for_item.msg;
      this.putdata(this.get_section_for_item);
      })
  }
  putdata(v:any){
    this.dataSource= new MatTableDataSource(v);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  putdata2(v:any){
    this.dataSource2= new MatTableDataSource(v);
    this.dataSource2.paginator=this.paginator2;
    this.dataSource2.sort=this.sort2;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource1.paginator = this.paginator1
    this.dataSource1.sort = this.sort1;

    this.dataSource2.paginator = this.paginator2;
    this.dataSource2.sort = this.sort2;
  }
  send_about_us(v:any){
    if(v!='')
   this.admin_data.post_about_us(v,this.r_id).subscribe(data=>{console.log(data)
    this.aboutusData1=data;
    if(this.aboutusData1.suc==1)
    {this.m="Updation Successful";
    this.myFunction();
    this.admin_data.get_about_us(this.r_id).subscribe(data=>{console.log(data)
      this.aboutusData=data;
        this.about_text_readonly=this.aboutusData.msg[0].about_us;
      })
  }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
  },error=>{
    this.m="Failed to update"
    this.myFunction();

  })
  }
  get_sec_id(mid:any,v:any,v1:any,v2:any,id:any,ip:any,inote:any){
    this.show_button3=true;
    this.secid=v1;
    console.log(mid);
    this.item_i=v2
    this.ide=id;
    this.ipr=ip;
    this.ino=inote;
    this.mid1=mid;
    this.idfordesc=v;
    console.log(this.ide+" "+this.ino+" "+this.ipr)
    this.z=document.getElementById('b'+mid)
    this.z.checked=true;
    console.log(this.z)
    this.submit_show=true;
    this.sec_value=v1;
    this.admin_data.get_section_data(this.r_id,this.mid1).subscribe(data=>{console.log(data)
      this.get_section_for_item1=data;
      this.get_section_for_item1=this.get_section_for_item1.msg;
      
      })
      this.admin_data.get_item_data(this.r_id,this.mid1,this.secid).subscribe(data=>{console.log(data)
        this.idata=data;
        this.idata=this.idata.msg;
      })    
    console.log("menu_id="+mid+" section_id="+this.secid+" res_id="+this.r_id+" item_id="+this.item_i+" id="+this.idfordesc)
    // alert(v)
  }
  update_section(v:any){
    this.sec_value=v;
    this.submit_show=false;
    this.createsecval=''
    for(let i=1;i<=5;i++)
    {
      this.q=document.getElementById('b'+i);
      if(this.q.checked==true)
      this.m_id=this.q.value
    }
    // console.log("menu_id="+this.mid1+" section_id="+this.secid+" section_name="+this.sec_value+" res_id="+this.r_id)
    console.log(this.m_id+" "+v);
    var dt={
      "restaurant_id" : this.r_id,
    "menu_id":this.m_id,
    "sec_name":this.sec_value,
    "id":this.idforcreatesection
    }
    this.admin_data.post_section_create(dt).subscribe(data=>{console.log(data)
    this.sec_post_data=data;
    if(this.sec_post_data.suc==1)
    {
      this.m="Updation Successful";
      // setTimeout(()=>{
      //   location.reload();
      // },3000)
    this.myFunction();
    this.fetchdata();
    setTimeout(()=>{
      location.reload();
    },3000)
    this.rad=document.getElementById('b'+this.m_id);
    console.log(this.rad)
    this.rad.checked=false;
    
    }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
    },error=>{
      this.m="Failed to update"
      this.myFunction();
  
    })
  }
  update_add_item(m:any,e:any,s:any,k:any){
    this.mid2=m;
    this.eid2=e;
    this.sid2=s;
    this.iid=k;
    this.i_value=s
    console.log(this.eid2)
    this.submit_show2=true;

  }
  store_menu(v:any){
    this.m_id=v;
    console.log(this.m_id)
    // if(this.submit_show==false)
    //  {
    //    this.secval1=document.getElementById('secval');
    //    this.secval1.value='';
    //  }
    // alert("store "+v)
    //alert(v);
    // this.fetchdata(v)
  }
  create_section(v:any){
    console.log(this.m_id+" "+v);
    var dt={
      "restaurant_id" : this.r_id,
    "menu_id":this.m_id,
    "sec_name":v
    }
    this.admin_data.post_section_create(dt).subscribe(data=>{console.log(data)
    this.sec_post_data=data;
    if(this.sec_post_data.suc==1)
    {
      this.m="Updation Successful";
    this.myFunction();
    this.fetchdata()
    }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
    },error=>{
      this.m="Failed to update"
      this.myFunction();
  
    })
  }
  select_section_with_menu(v:any){
    this.menu_item=v;
    this.admin_data.get_section_data(this.r_id,v).subscribe(data=>{console.log(data)
    this.get_section_for_item=data;
    this.get_section_for_item=this.get_section_for_item.msg;
    
    })
  }
  update_send_item(v1:any,v2:any,v:any){
    // this.mid2=m;
    // this.eid2=e;
    // this.sid2=s;
    // this.i_value=s
    this.submit_show2=false;
    console.log(this.mid2+" "+this.eid2+" "+this.i_value+" "+this.iid)
    var dt={
      "restaurant_id" : this.r_id,
      "menu_id":v1,
      "sec_id":v2,
      "item_name":v,
      "id":this.iid
      // "break_check" : 'Y',
      // "month_day": [{"dt":mon},{"dt":tue},{"dt":wed},{"dt":thur},{"dt":fri},{"dt":sat},{"dt":sun}],
      // "start_time" : st,
      // "end_time" : end
    }
    this.admin_data.post_item_data(dt).subscribe(data=>{console.log(data)
    this.itemData=data;
    if(this.itemData.suc==1){
      this.m="Updation Successful";
      this.myFunction();
      this.fetchdata1();
      setTimeout(()=>{location.reload();},3000)
      
      // location.reload();
      // this.pick=document.getElementById('pickup_place');
      // this.pick.value='';
      // this.ht=document.getElementById('headtitle');
      // this.ht.value='';
    }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
    },error=>{
      this.m="Failed to update"
      this.myFunction();
  
    })
  }
  get_section_item(v:any){
   this.sectionitem=v;
   console.log(this.r_id+" "+this.menufordesc+" "+this.sid)
  
  }

  fetchdata1(){
    this.admin_data.get_item_data(this.r_id,'','').subscribe(data=>{console.log(data)
      this.idata=data;
      this.idata=this.idata.msg;
      this.putdata1(this.idata);
      })
  }
  send_item(v:any){
    console.log(this.menu_item+" "+this.sectionitem+" "+v)
    var dt={
      "restaurant_id" : this.r_id,
      "menu_id":this.menu_item,
      "sec_id":this.sectionitem,
      "item_name":v
      // "break_check" : 'Y',
      // "month_day": [{"dt":mon},{"dt":tue},{"dt":wed},{"dt":thur},{"dt":fri},{"dt":sat},{"dt":sun}],
      // "start_time" : st,
      // "end_time" : end
    }
    this.admin_data.post_item_data(dt).subscribe(data=>{console.log(data)
    this.itemData=data;
    if(this.itemData.suc==1){
      this.m="Updation Successful";
      this.myFunction();
    }
    else{
      this.m="Failed to update"
      this.myFunction();
    }
    },error=>{
      this.m="Failed to update"
      this.myFunction();
  
    })
  }
  select_for_desc_menu(v:any){
    this.menufordesc=v;
    this.admin_data.get_section_data(this.r_id,v).subscribe(data=>{console.log(data)
      this.get_section_for_item1=data;
      this.get_section_for_item1=this.get_section_for_item1.msg;
      
      })
  }
  get_item_select(v:any){
    
    this.sid=v;
    this.admin_data.get_item_data(this.r_id,this.menufordesc,this.sid).subscribe(data=>{console.log(data)
    this.idata=data;
    this.idata=this.idata.msg;
    
    })
  }
  putdata1(v:any){
    this.dataSource1= new MatTableDataSource(v);
    this.dataSource1.paginator=this.paginator1;
    this.dataSource1.sort=this.sort1;
  }
  get_item_select1(v:any){
    this.i_data=v;

  }
  submit_price_desc(p:any,d:any,a:any)
  {
    console.log(this.sid+" "+this.menufordesc+" "+this.i_data)
    var dt={
      "restaurant_id" : this.r_id,
      "menu_id":this.menufordesc,
      "sec_id": this.sid,
      "item_id": this.i_data,
      "item_price" : p,
      "item_desc" : d,
      "item_note" : a
    }
    this.admin_data.post_item_data_desc(dt).subscribe(data=>{console.log(data)
     this.itemdesc=data;
     if(this.itemdesc.suc==1){
     this.m="Updation Successful";
     this.myFunction();
   }
   else{
     this.m="Failed to update"
     this.myFunction();
   }
    },error=>{
      this.m="Failed to update"
     this.myFunction();
    })
  }
  fetchdata2(){
    this.admin_data.get_item_data_desc(this.r_id).subscribe(data=>{console.log(data)
      this.descriptionData=data;
      this.descriptionData=this.descriptionData.msg
    this.putdata2(this.descriptionData)
    
    })
  }
submitup(mon:any,tue:any,wed:any,thur:any,fri:any,sat:any,sun:any,st:any,end:any){
  this.storevalue.length=0;
  this.veh1=document.getElementById('vehicle1')
  this.veh2=document.getElementById('vehicle2')
  this.veh3=document.getElementById('vehicle3')
  this.veh4=document.getElementById('vehicle4')
  this.veh5=document.getElementById('vehicle5')
  this.veh6=document.getElementById('vehicle6')
  this.veh7=document.getElementById('vehicle7')
  this.veh8=document.getElementById('vehicle8')
  if(this.veh2.checked)
  this.mon=2
  if(this.veh3.checked)
  this.tue=3
  if(this.veh4.checked)
  this.wed=4
  if(this.veh5.checked)
  this.thur=5
  if(this.veh6.checked)
  this.fri=6
  if(this.veh7.checked)
  this.sat=7
  if(this.veh8.checked)
  this.sun=8
  
  console.log(this.mon+" "+this.tue+" "+this.wed+" "+this.thur+" "+this.fri+" "+this.sat+" "+this.sun+" ")
  this.storevalue.push({
    "restaurant_id" : this.r_id,
    "menu_id":this.menuid,
    "break_check" : 'Y',
    "month_day": [{"dt":this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thur},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}],
    "start_time" : st,
    "end_time" : end

  })
  this.admin_data.post_date_time(this.storevalue).subscribe(data=>{console.log(data)
  this.setTimedata=data;
  console.log(this.setTimedata)
  })
}
checkbrunchday(e:any,day:any){
  if(day=='everyday'){
  if(e.target.checked){
    this.veh1=document.getElementById('vehicle1')
    this.veh2=document.getElementById('vehicle2')
    this.veh3=document.getElementById('vehicle3')
    this.veh4=document.getElementById('vehicle4')
    this.veh5=document.getElementById('vehicle5')
    this.veh6=document.getElementById('vehicle6')
    this.veh7=document.getElementById('vehicle7')
    this.veh8=document.getElementById('vehicle8')
    this.veh2.checked=true;
    this.veh3.checked=true;
    this.veh4.checked=true;
    this.veh5.checked=true;
    this.veh6.checked=true;
    this.veh7.checked=true;
    this.veh8.checked=true;
    this.mon=2;
    this.tue=3;
    this.wed=4;
    this.thur=5;
    this.fri=6;
    this.sat=7;
    this.sun=8;
  }
  else
  {
    this.mon=0;
    this.tue=0;
    this.wed=0;
    this.thur=0;
    this.fri=0;
    this.sat=0;
    this.sun=0;
  }
   
  //  this.veh1.checked=true;
  }
  else if(day=='monday'){
    if(e.target.checked){
      this.veh2=document.getElementById('vehicle2')
      this.veh2.checked=true;
      this.mon=2;
    }
    else
    { this.mon=0;
    this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='tuesday'){
    if(e.target.checked){
      this.veh3=document.getElementById('vehicle3')
      this.veh3.checked=true;
      this.tue=3;
    }
    else
    { this.tue=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='wednesday'){
    if(e.target.checked){
      this.veh4=document.getElementById('vehicle4')
      this.veh4.checked=true;
      this.wed=4;
    }
    else
     {this.wed=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='thursday'){
    if(e.target.checked){
      this.veh5=document.getElementById('vehicle5')
      this.veh5.checked=true;
      this.thur=5;
    }
    else
     {this.thur=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='friday'){
    if(e.target.checked){
      this.veh6=document.getElementById('vehicle6')
      this.veh6.checked=true;
      this.fri=6;
    }
    else
     {this.fri=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='saturday'){
    if(e.target.checked){
      this.veh7=document.getElementById('vehicle7')
      this.veh7.checked=true;
      this.sat=7;
    }
    else
     {this.sat=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='sunday'){
    if(e.target.checked){
      this.veh8=document.getElementById('vehicle8')
      this.veh8.checked=true;
      this.sun=8;
    }
    else
    { this.sun=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else{}
}
pickup_place(v:any){
  this.menu_place=v
}
getposition(e:any){
  this.pos=e
}
submit_special(m:any,p:any,h:any,c1:any,c2:any,notice:any){
  this.menu_place=m;
  this.pos=p;
  var dt = {
    "menu":this.menu_place,notice_flag: 'Y', position: this.pos,headertitle:h,fontcolor:c1,back_color:c2,notice:notice,restaurant_id:this.r_id};
    this.admin_data.post_special(dt).subscribe(data=>{console.log(data)
      this.spData=data;
      if(this.spData.suc==1){
        this.m="Updation successful"
        this.myFunction()
      }
      else{
        this.m="Failed to update"
        this.myFunction()
      }
    },error=>{this.m="Failed to update"
    this.myFunction()})
}
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  //retrieve date and time for set date and time tab
  menu_set_date_time(v:any){
    this.menuid=v;
    // alert(v);
    for(this.k=1;this.k<=8;this.k++)
    {
      this.daycheck=document.getElementById('vehicle'+this.k);
      this.daycheck.checked=false;
    }
    this.admin_data.get_set_time(v,this.r_id).subscribe(data=>{console.log(data)
    this.datetimeData=data;
    this.starttime=this.datetimeData.msg[0].start_time;
    this.endtime=this.datetimeData.msg[0].end_time;
    this.datetimeData=this.datetimeData.msg;
    if(this.datetimeData.length==7){
    this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=true;
     this.mon=2;
     this.tue=3;
     this.wed=4;
     this.thur=5;
     this.fri=6;
     this.sat=7;
     this.sun=8;
    }
    for(let i=0;i<this.datetimeData.length;i++)
    {
      this.daycheck=document.getElementById('vehicle'+this.datetimeData[i].month_day);
      this.daycheck.checked=true;
      this.veh1=document.getElementById('vehicle1')
      this.veh2=document.getElementById('vehicle2')
      this.veh3=document.getElementById('vehicle3')
      this.veh4=document.getElementById('vehicle4')
      this.veh5=document.getElementById('vehicle5')
      this.veh6=document.getElementById('vehicle6')
      this.veh7=document.getElementById('vehicle7')
      this.veh8=document.getElementById('vehicle8')
      if(this.veh2.checked)
      this.mon=2
      if(this.veh3.checked)
      this.tue=3
      if(this.veh4.checked)
      this.wed=4
      if(this.veh5.checked)
      this.thur=5
      if(this.veh6.checked)
      this.fri=6
      if(this.veh7.checked)
      this.sat=7
      if(this.veh8.checked)
      this.sun=8
      
    }
    
    })
  }
  //retrieve section image
  get_sec_img(v:any){
  //  alert(v);
  this.admin_data.get_sec_url(v,this.r_id).subscribe(data=>{console.log(data)
    this.secData=data;
    this.secData=this.secData.msg;
  })
  }
  //opening respective tabs
  openCity(v:any){
    if(v=='tab1'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab2'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab3'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab33'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab4'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab5'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab6'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    
    if(v=='tab7'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab8'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    if(v=='tab9'){
      this.tab_el=document.getElementById('defaultOpen');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen1');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen2');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen33');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen4');
      this.tab_el.style.background=''
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen5');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen6');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen7');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen8');
      this.tab_el.style.background='white'
      this.tab_el.style.color="black";
      this.tab_el=document.getElementById('defaultOpen9');
      this.tab_el.style.background='#3F51B5'
      this.tab_el.style.color="white";
      // this.tab_el=document.getElementById('defaultOpen10');
      // this.tab_el.style.background='white'
      // this.tab_el.style.color="black";
      

    }
    // if(v=='tab10'){
    //   this.tab_el=document.getElementById('defaultOpen');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen1');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen2');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen33');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen4');
    //   this.tab_el.style.background=''
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen5');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen6');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen7');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen8');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen9');
    //   this.tab_el.style.background='white'
    //   this.tab_el.style.color="black";
    //   this.tab_el=document.getElementById('defaultOpen10');
    //   this.tab_el.style.background='#3F51B5'
    //   this.tab_el.style.color="white";
      

    // }
   this.show_tab=v;
   
  }

  checkvalidity(event:any){
    console.log(event)
    if(event.target.id=='headTitle'){
      if(event.target.value!=''){
        this.value_Headertitle=false;
        }
        else{
        this.value_Headertitle=true;
          
        }
    }}
    changecolor(event:any,e:any){
      if(e=='back'){
      this.back=document.getElementById('box');
      this.back.value=event.target.value;
      this.value_font=false;
      }
      else if(e=='font'
      ){
       this.back=document.getElementById('box2');
       this.back.value=event.target.value;
       this.value_background=false;
      }
      console.log(event.target.value);
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
send_mail()
{
  console.log(this.r_id)
 this.admin_data.send_admin_mail(this.r_id).subscribe((data:any)=>{console.log(data)
  this.mail_data=data;
  if(this.mail_data.suc==1)
 {
    this.m="Email Sent!"
    this.myFunction()
  }
  else{
    this.m="There was a problem while sending the email"
    this.myFunction()
  }
},error=>{    this.m="There was a problem while sending the email"

this.myFunction()}
)
}
upload_logo(e:any){
  console.log(e.target.files[0])
}
update_price_desc(menid:any,sectionid:any,itemid:any,pr:any,de:any,ad:any){
  var dt={
    "restaurant_id" : this.r_id,
    "menu_id":menid,
    "sec_id": sectionid,
    "item_id": itemid,
    "item_price" : pr,
    "item_desc" : de,
    "item_note" : ad,
    "id":this.idfordesc
  }
  this.admin_data.post_item_data_desc(dt).subscribe(data=>{console.log(data)
    this.itemdesc=data;
    if(this.itemdesc.suc==1){
    this.m="Updation Successful";
    this.ide='';
    this.ino='';

    setTimeout(()=>{
      location.reload();
    },3000)
    this.myFunction();
    this.show_button3=false;
    this.fetchdata2();
    
   
  }
  else{
    this.m="Failed to update"
    this.myFunction();
  }
   },error=>{
     this.m="Failed to update"
    this.myFunction();
   })
   
}
get_sec_id1(menid:any,id:any,val:any){
  console.log(menid+" "+id+" "+val);
  this.submit_show=true;
  this.idforcreatesection=id;
  this.z1=document.getElementById('b'+menid)
  this.z1.checked=true;
  this.createsecval=val;
  console.log(this.createsecval)
  
}
}