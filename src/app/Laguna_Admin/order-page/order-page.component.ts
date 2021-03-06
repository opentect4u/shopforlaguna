import {  Component, OnInit } from '@angular/core';
import { LagunaserviceService } from 'src/app/Services/lagunaservice.service';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';//For Image Cropper
import { url_set } from 'src/app/globalvar';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class AdminOrderPageComponent implements OnInit {
  windowcling_yes:any;
  pack:boolean=false;
  showWallData:any;
  promo:boolean=true;
  signhold:boolean=true;
  windowcl:boolean=true;
  eventData:any;
  PACK:any;
  img_cover: any;
  PROMO:any;
  SIGNHOLD:any;
  WINDOWCL:any;
  promo2:boolean=true
  promo1:boolean=true;
  sign2:boolean=true;
  tab:any;
  deleteId:any;
  stockImageName:any;
  yes_stnd:any;
  no_stnd:any;
  set_value:any;
  Package:any=[];
  stanData:any;
  stanplusData:any;
  premiumData:any;
  windowData:any;
  stnd_specialmenu_yes:any
  stnd_numberofmenu:any
  stndpackage_setupfee:any;
  stndpackage_desc:any;
  stndpacakge__monthlyfee:any;
  tabletopData:any;
  stndplus_specialmenu_yes:any
  stndpluspacakge__numberofmenu:any;
  stndpluspackage_monthlyfee:any;
  stndpluspacakge_setupfee:any;
  stndpluspacakge_desc:any;
  birthdayData:any;
  premiumpacakge_specialmenu_yes:any;
  premiumpacakge_specialmenu_no:any;
  premiumpacakge_numberofmenu:any;
  premiumpacakge_monthlyfee:any;
  premiumpacakge_setupfee:any;
  premiumpacakge_des:any;
 wallData:any;
  promo_Birthdaypriceyes:any
  promo_Birthdaypriceno:any
  promo_Birthdayprice:any;
  promo_EventCalendarprice:any;
  promo_EventCalendarprice_yes:any
  promo_EventCalendarprice_no:any
  promocalendar:any=[];
  stockimage=false;
  m='';
  signholder_price1:any;
  signholder_price2:any;
  signholder_price3:any;
  signholder:any=[];
  STOCKIMAGE:any;
   url1=url_set.api_url+'/stock/'
  windowcling_price:any
  window:any=[];
  x: any;
  el: any;
  scale = 1;
 transform: ImageTransform = {};
 showCropper = false;
 hide=false;
 valu = true;
 Zoomout = true;
 ZoomIn = true;
 modal = true;
 croppedImage:any ;
 Modal:any;
 crop_height:any;
 crop_width:any;
 stock_file1:any;
 modal_close_oncrop:any;
 catData:any;
 imageData:any;
 previewImg:any;
 dispCross:any;
 select_div:any;
 file_div:any
  constructor(private spinner:NgxSpinnerService,private laguna:LagunaserviceService) { }
  selectStock:any;
  ngOnInit(): void {
    this.selectStock=document.getElementById('pickup_place_stock')
  //For Package Tab
  this.laguna.get_category_list().subscribe(data=>{console.log(data)
   this.catData=data;
   this.catData=this.catData.msg;
  })
  this.laguna.getStockImages('').subscribe(data=>{console.log(data)
    this.imageData=data;
    this.imageData=this.imageData.msg
    console.log(this.imageData)
    
    })
    this.laguna.getpackagedata().subscribe(data=>{
    console.log(data);
      this.Package=data;

     for(let i=0;i<this.Package.msg.length;i++){
          if(this.Package.msg[i].pakage_name==1){
            this.stndpackage_setupfee=this.Package.msg[i].setup_fee;
            this.stndpacakge__monthlyfee=this.Package.msg[i].monthly_fee;
             this.stndpackage_desc=this.Package.msg[i].pack_description;
             this.stnd_numberofmenu=this.Package.msg[i].no_of_menu;
             console.log(this.stndpackage_setupfee,this.stndpacakge__monthlyfee);
             if(this.Package.msg[i].special_menu=="Y"){
             this.stnd_specialmenu_yes=document.getElementById('yes_stnd');
             this.stnd_specialmenu_yes.checked=true;
             }
             else{
              
               this.stnd_specialmenu_yes=document.getElementById('no_stnd');
              this.stnd_specialmenu_yes.checked=true;
             }

          }
          else if(this.Package.msg[i].pakage_name==2){
            this.stndpluspacakge__numberofmenu=this.Package.msg[i].no_of_menu;
            this.stndpluspackage_monthlyfee=this.Package.msg[i].monthly_fee;
            this.stndpluspacakge_setupfee=this.Package.msg[i].setup_fee;
               this.stndpluspacakge_desc=this.Package.msg[i].pack_description;
               if(this.Package.msg[i].special_menu=='Y'){
                       this.stndplus_specialmenu_yes=document.getElementById('yes');
                       this.stndplus_specialmenu_yes.checked=true;  
               }
               else{
                this.stndplus_specialmenu_yes=document.getElementById('no');
                this.stndplus_specialmenu_yes.checked=true;
               }
          }
          else if(this.Package.msg[i].pakage_name==3){
            // this.premiumpacakge_specialmenu_yes=
            this.premiumpacakge_numberofmenu=this.Package.msg[i].no_of_menu;
              this.premiumpacakge_monthlyfee=this.Package.msg[i].monthly_fee;
              this.premiumpacakge_setupfee=this.Package.msg[i].setup_fee;
             this.premiumpacakge_des=this.Package.msg[i].pack_description;
             if(this.Package.msg[i].special_menu=='Y'){
              this.premiumpacakge_specialmenu_yes=document.getElementById('yes_premium');
              this.premiumpacakge_specialmenu_yes.checked=true;
             }
             else{
              this.premiumpacakge_specialmenu_no=document.getElementById('no_premium');
               this.premiumpacakge_specialmenu_no.checked=true;
             }

          }
          else{

          }
          
          // console.log(this.premiumpacakge_specialmenu_yes.checked);
     }
    })
    //For Promo Calendar Tab
    this.laguna.GetPromoCalendar().subscribe(data=>{
      // console.log(data);
      this.promocalendar=data;
      for(let i=0;i<this.promocalendar.msg.length;i++){
        if(this.promocalendar.msg[i].id==4){
          this.promo_Birthdayprice=this.promocalendar.msg[i].price;

            if(this.promocalendar.msg[i].free_flag=='Y'){
          this.promo_Birthdaypriceyes=document.getElementById('yes_birth');
          this.promo_Birthdaypriceyes.checked=true;
          this.promo1=true;
         }
        else{
          this.promo_Birthdaypriceno=document.getElementById('no_birth');
          this.promo_Birthdaypriceno.checked=true;
          this.promo1=false;

        }
       
         
       
        }
        else if(this.promocalendar.msg[i].id==5){
          this.promo_EventCalendarprice=this.promocalendar.msg[i].price;
          if(this.promocalendar.msg[i].free_flag=='Y'){
            this. promo_EventCalendarprice_yes=document.getElementById('yes_calend');
            this. promo_EventCalendarprice_yes.checked=true;
            this.promo2=true;
          }
          else{
            this.promo_EventCalendarprice_no=document.getElementById('no_calend');
            this.promo_EventCalendarprice_no.checked=true;
            this.promo2=false;;

          }
        }
        else{

        }
      
      
     
      
      }

    })
    //For SignHolder
    this.laguna.Getsignupholder().subscribe(data=>{
            this.signholder=data;
            for(let i=0;i<this.signholder.msg.length;i++){
              if(this.signholder.msg[i].id==6){
                 this.signholder_price1=this.signholder.msg[i].price;
                
              }
              else if(this.signholder.msg[i].id==7){
                   this.signholder_price2=this.signholder.msg[i].price;
              }
              else if(this.signholder.msg[i].id==8){
                this.signholder_price3=this.signholder.msg[i].price;
              }
            }
    })
    //For Window Cling
    this.laguna.GetWindowCling().subscribe(data=>{
      // console.log(data);
      this.window=data;
      for(let i=0;i<this.window.msg.length;i++){
        if(this.window.msg[i].id==9){
          this.windowcling_price=this.window.msg[i].price;
        }
      }

      // this.windowcling_description
    })
    this.PACK=document.getElementById('package');
    this.PACK.className='active';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='#3F51B5';
    this.PACK.style.color='#fff';
  

  }
//For Toggling from one tab to another
  opencity(e:any){
    //For package Tab
    if(e=='package'){
        this.pack=false;
    this.promo=true;
    this.stockimage=true
    this.signhold=true;
    this.windowcl=true;
    this.PACK=document.getElementById('package');
    this.PACK.className='active';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='#3F51B5';
    this.PACK.style.color='#fff';
    this.PROMO=document.getElementById('defaultpromo');
     this.PROMO.style.background='';
     this.PROMO.style.color='black';
     this.SIGNHOLD=document.getElementById('defaultsign');
     this.SIGNHOLD.style.background='';
     this.SIGNHOLD.style.color='black';
     this.WINDOWCL=document.getElementById('defaultwindow');
     this.WINDOWCL.style.background='';
     this.WINDOWCL.style.color='black';
     this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';
 
      
    }
    //For Promotion tab
    else if(e=='promo'){
       this.pack=true;
   this.promo=false;
   this.stockimage=true

   this.signhold=true;
   this.windowcl=true;
   this.PROMO=document.getElementById('promoCalendar');
   this.PROMO.className='active';
   this.PROMO=document.getElementById('defaultpromo');
   this.PROMO.style.background='#3F51B5';
   this.PROMO.style.color='#fff';
   this.PACK=document.getElementById('defaultOpen');
   this.PACK.style.background='';
   this.PACK.style.color='black';
   this.SIGNHOLD=document.getElementById('defaultsign')
   this.SIGNHOLD.style.background='';
   this.SIGNHOLD.style.color='black';
   this.WINDOWCL=document.getElementById('defaultwindow');
   this.WINDOWCL.style.background='';
   this.WINDOWCL.style.color='black';
   this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';
    }
    //For signholder tab
    else if(e=='signholder'){
         this.pack=true;
    this.promo=true;
    this.stockimage=true

    this.signhold=false;
    this.windowcl=true;
    this.SIGNHOLD=document.getElementById('signHolder');
    this.SIGNHOLD.className='active';
    this.SIGNHOLD=document.getElementById('defaultsign')
    this.SIGNHOLD.style.background='#3F51B5';
    this.SIGNHOLD.style.color='#fff';
    this.PROMO=document.getElementById('defaultpromo');
    this.PROMO.style.background='';
    this.PROMO.style.color='black';
    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='';
    this.PACK.style.color='black';
    this.WINDOWCL=document.getElementById('defaultwindow');
    this.WINDOWCL.style.background='';
    this.WINDOWCL.style.color='black';
    this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';
    }
    //For Window tab
    else if(e=='window'){
        this.pack=true;
    this.promo=true;
    this.signhold=true;
    this.windowcl=false;
    this.stockimage=true

    this.WINDOWCL=document.getElementById('windowCling');
    this.WINDOWCL.className='active';
    this.WINDOWCL=document.getElementById('defaultwindow');
    this.WINDOWCL.style.background='#3F51B5';
    this.WINDOWCL.style.color='#fff';

    this.SIGNHOLD=document.getElementById('defaultsign')
    this.SIGNHOLD.style.background='';
    this.SIGNHOLD.style.color='black';

    this.PROMO=document.getElementById('defaultpromo');
    this.PROMO.style.background='';
    this.PROMO.style.color='black';

    this.PACK=document.getElementById('defaultOpen');
    this.PACK.style.background='';
    this.PACK.style.color='black';
    this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='';
     this.STOCKIMAGE.style.color='black';

    }
    else{
      this.pack=true;
      this.promo=true;
      this.signhold=true;
      this.windowcl=true;
    this.stockimage=false

      // this.WINDOWCL=document.getElementById('windowCling');
      // this.WINDOWCL.className='active';
      this.WINDOWCL=document.getElementById('defaultwindow');
      this.WINDOWCL.style.background='';
      this.WINDOWCL.style.color='black';
  
      this.SIGNHOLD=document.getElementById('defaultsign')
      this.SIGNHOLD.style.background='';
      this.SIGNHOLD.style.color='black';
  
      this.PROMO=document.getElementById('defaultpromo');
      this.PROMO.style.background='';
      this.PROMO.style.color='black';
  
      this.PACK=document.getElementById('defaultOpen');
      this.PACK.style.background='';
      this.PACK.style.color='black';
      this.STOCKIMAGE=document.getElementById('stock')
    this.STOCKIMAGE.className='active'
      this.STOCKIMAGE=document.getElementById('defaultstock')
     this.STOCKIMAGE.style.background='#3F51B5';
     this.STOCKIMAGE.style.color='white';
    }
  }
  //Admin order set up page package tab first row
  submit(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes_stnd');
    this.no_stnd=document.getElementById('no_stnd');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
     
    }
    else{
      this.set_value='N';
      
    }
    var dt={
       "Menu_number":v1,
       "Serial_no":v2,
       "Special_Menu":this.set_value,
       "SetUp_Fee":v3,
       "Monthly_Fee":v4,
      //  "Description":v5
    }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.stanData=data;
      if(this.stanData.suc==1){
        this.m="Updation successful";
        this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    });
  }
    //Admin order set up page package tab second row
  submitstndplus(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes');
    this.no_stnd=document.getElementById('no');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
     
    }
    else{
      this.set_value='N';
     
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.stanplusData=data;
      if(this.stanplusData.suc==1){
        this.m="Updation successful";
        this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    });
  }
    //Admin order set up page package tab third row
  submitpremium(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes_premium');
    this.no_stnd=document.getElementById('no_premium');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
      
    }
    else{
      this.set_value='N';
     
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.laguna.postpackagedata(dt).subscribe(data=>{
      console.log(data);
      this.premiumData=data;
      if(this.premiumData.suc==1){
        this.m="Updation successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    });

  }
    //Admin order set up page Promo&calendar tab first row
  showeventcalendar(v1:any,v2:any){
    this.yes_stnd=document.getElementById('yes_calend');
    this.no_stnd=document.getElementById('no_calend');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    var dt={
     "serial_no":v1,
     "price":v2,
     "free":this.set_value
    }

    console.log(v1,v2,this.set_value);
    console.log(dt);
    this.laguna.PostPromoCalendar(dt).subscribe(data=>{
      console.log(data);
      this.eventData=data;
      if(this.eventData.suc==1){
        this.m="Updation successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
      
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
//Admin order set up page Promo&calendar tab second row
  birthdayaniversery(v1:any,v2:any){
    this.yes_stnd=document.getElementById('yes_birth');
    this.no_stnd=document.getElementById('no_birth');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    console.log(v1,v2,this.set_value);
    var dt={
      "serial_no":v1,
      "price":v2,
      "free":this.set_value
     }
     console.log(v1,v2,this.set_value);
     console.log(dt);
      this.laguna.PostPromoCalendar(dt).subscribe(data=>{
        console.log(data);
        this.birthdayData=data;
        if(this.birthdayData.suc==1){
       
          this.m="Updation successful";
        this.myFunction()
        }
        else{
          this.m="Failed to update";
          this.myFunction()
        }
      },error=>{
        this.m="Failed to update";
        this.myFunction()
      })
     

  }
 //Admin order set up page signholder tab first row
  opentabletop(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v1,
       "serial_no":v2
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.tabletopData=data;
      if(this.tabletopData.suc==1){
       
        this.m="Updation successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
      
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
   //Admin order set up page signholder tab second row
  openwallmount(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.wallData=data;
      if(this.wallData.suc==1){
       
        this.m="Updation successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
      this.myFunction()
    })
  }
   //Admin order set up page signholder tab third row
  showwall(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1
    }
    console.log(v1,v2);
    console.log(dt);
    this.laguna.Postsignupholder(dt).subscribe(data=>{
      console.log(data);
      this.showWallData=data
      if(this.showWallData.suc==1){
       
        this.m="Updation successful";
      this.myFunction()
      }
      else{
        this.m="Failed to update";
        this.myFunction()
      }
    },error=>{
      this.m="Failed to update";
        this.myFunction()
    })
  }
  //Admin order set up page windowCling tab first row
  showwindow(v1:any,v2:any){
    var dt={
      "per_Holder_Price":v2,
       "serial_no":v1
    }
   console.log(v1,v2);
   console.log(dt);
   this.laguna.PostWIndowCling(dt).subscribe(data=>{
     console.log(data);
     this.windowData=data
     if(this.windowData.suc==1){
       
      this.m="Updation successful";
    this.myFunction()
    }
    else{
      this.m="Failed to update";
      this.myFunction()
    }
   },error=>{
    this.m="Failed to update";
    this.myFunction()
   })
  }
  //For Disabled the Price on Enable the yes radio button in Promo&Calendar Tab
  verify(e:any){
    if(e=='y'){
      this.promo1=true;
      this.windowcling_yes=document.getElementById('birthday');
      this.windowcling_yes.value=0;
    }
    else{
      this.promo1=false;
    }
  }
  verifytre(e:any){
    if(e=='yes'){
      this.promo2=true;
      this.windowcling_yes=document.getElementById('eventcalnedar');
      this.windowcling_yes.value=0;
    }
    else{
         this.promo2=false;
    }
  }
//For character key Input Disabled
  preventNonNumericalInput(e:any){
    e = e || window.event;
    
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/))
     { e.preventDefault();}

  }
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  cat_select(){}

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }
  
  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }
  imageLoaded() {
    console.log("image loaded")
    this.showCropper = true;
    this.modal = false;
    this.hide = false;
    this.valu = false;
    this.Zoomout = false;
    this.ZoomIn = false;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log('imagecropped');
    // event.width=this.crop_width;
    // event.width=this.crop_height;
    console.log("width:" + event.width);
    console.log("height:" + event.height)
    this.croppedImage = event.base64;
    // this.preview_for_stock=this.croppedImage
    console.log(this.croppedImage);
  }
  cropperReady(sourceImageDimensions: Dimensions) {
   console.log('Cropper ready', sourceImageDimensions);
    console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
  }
  loadImageFailed() {
    console.log('Load failed');
  }
  click_it(){
    // this.cover_change=true;
      this.valu = true;
      this.img_cover=this.croppedImage;
      console.log("Cropped Image:" +this.croppedImage);
      // this.Breakfast_cover_preview=false;
      this.el.style.display='none'
  }
  close_it(){
    this.valu=true;
    this.Modal=document.getElementById('myfile');
    this.Modal.value=null;
  
  }
  open_crop_modal(){
    this.el=document.getElementById('id01');
    this.el.style.display='block'
  
  }
  open_preview_modal(v:any){
    this.previewImg=v;
    this.el=document.getElementById('id02');
    this.el.style.display='block'
  
  }
  
  stock_image_change(e:any){
    this.crop_width=1800;
    this.crop_height=500;
    console.log(this.crop_width+" "+this.crop_height)
    this.stockImageName=e.target.files[0].name;
    // console.log(this.cropround)
    console.log(e.target.files[0])
    // this.logoname=e.target.files[0].name;
    // this.logo_file=e.target.files[0];
    this.img_cover=e;
    this.stock_file1=document.getElementById('logo_crop');
    this.stock_file1.click();
    console.log("hello")
  }
  close_modal_on_crop(){
    this.modal_close_oncrop=document.getElementById('id01');
    this.modal_close_oncrop.style.display='none'
  }
  close_preview_modal(){
    this.el=document.getElementById('id02');
    this.el.style.display='none'
    // console.log("lallalalallalaei poth jodi na shesh hoy")
  }
  submit_stock_image(v:any){
    
    if(v&&this.img_cover){
      this.spinner.show()
      console.log("Submitted"+" "+this.stockImageName);
      console.log(this.img_cover);
      this.laguna.uploadStockImage(v,this.img_cover,this.stockImageName).subscribe(data=>{console.log(data)
         this.spinner.hide();
        this.laguna.getStockImages('').subscribe(data=>{console.log(data)
          this.imageData=data;
          this.imageData=this.imageData.msg
          this.reset_stock();
          })
      
      })
     
    //  this.selectStock.value='';
   
    }
    else{
      
      this.m="Sorry! You can't keep an empty field"
      this.myFunction()
      // console.log("Empty Field")
    }

  }
  pic_select(v:any){
    this.imageData.length=0;
    console.log(v);
    this.laguna.getStockImages(v).subscribe(data=>{console.log(data)
      this.imageData=data;
      this.imageData=this.imageData.msg
      
      })
  }
  openDeleteModal(){
    this.el=document.getElementById('id03');
    this.el.style.display='block'
  }
  closeDeleteModal(){
    this.el=document.getElementById('id03');
    this.el.style.display='none'
  }
  show_cross(){
    this.dispCross=false;
  }
  hide_cross(){
    this.dispCross=true
  }
  deleteImg(v:any){
    console.log(v)
    this.deleteId=v;
  }
  delete_stock_image(){
    console.log(this.deleteId);
    this.laguna.deleteStockImages(this.deleteId).subscribe(data=>{console.log(data)
      this.laguna.getStockImages('').subscribe(data=>{console.log(data)
        this.imageData=data;
        this.imageData=this.imageData.msg
        
        })
    })
  }
  reset_stock(){
    this.select_div=document.getElementById('pickup_place_stock_img');
    this.file_div=document.getElementById('headTitle_stock');
    this.select_div.value='';
    this.file_div.value=null;
  }
}
