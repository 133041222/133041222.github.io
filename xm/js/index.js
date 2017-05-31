$(function(){
	// 导航购物车
	let gouwu=document.querySelectorAll('.daohang .gouwu')[0];
	let gouwuc=$('.gouwuche',gouwu);
	let gouwuxl=$('.gouwuxl',gouwu);

	gouwu.onmouseenter=function(){
		gouwuxl[0].style.height='100px';
		gouwuc[0].style.background='white';
	}
	gouwu.onmouseleave=function(){
		gouwuxl[0].style.height='0px';
		gouwuc[0].style.background='#424242';
	}

	//下拉框
	let biaotis=document.querySelectorAll('.wenben .biaoti .biaotis')[0];
	let lis1=document.querySelectorAll('.wenben .biaoti .biaotis>li');
	let yangshi=document.querySelectorAll('.wenben .biaoti .biaotis .yangshi');

	for(let i=0;i<6;i++){
		
		lis1[i].onmouseenter=function(){
			// yangshi[i].style.height='230px';
			yangshi[i].style.height='230px';
			// yangshi[i].style.transition='1s';
		}
		lis1[i].onmouseleave=function(){
			yangshi[i].style.height='0px';
		}
		biaotis.onmouseenter=function(){
			// yangshi[i].style.height='230px';
			yangshi[i].style.transition='1s';
		}
		biaotis.onmouseleave=function(){
			// yangshi[i].style.height='0px';
			yangshi[i].style.transition='1s';
		}
	}

	// 轮播
	let btn=$('.btn')[0];
	let lis=$('li',btn);

	let btns=$('.btns')[0];
	let btnss=$('li',btns);
	let banner=$('.banner')[0];
	let left=$('.bleft',banner)[0];
	let right=$('.bright',banner)[0];
	// lis[0].style.zIndex=1;

	let index=0;
	let t=setInterval(move, 3000);

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move, 3000);
	}
	left.onclick=function(){
		moveD();
	}
	right.onclick=function(){
		move();
	}
	//点击
	for(let i=0;i<btnss.length;i++){
		btnss[i].onclick=function(){
			for(let j=0;j<btnss.length;j++){
				lis[j].style.display='none';
				btnss[j].className='';
			}
			lis[i].style.display='block';
			btnss[i].className='hot';
			index=i;
		}
	}
	//时间函数
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			btnss[i].className='';
		}
		lis[index].style.display='block';
		btnss[index].className='hot';	
	}
	function moveD(){
		index--;
		if(index<0){
			index=btnss.length-1;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			btnss[i].className='';
		}
		lis[index].style.display='block';
		btnss[index].className='hot';	
	}

	//banner图左侧框
	let uls=document.querySelectorAll('.banner .bannerl>ul')[0];
	let lis2=document.querySelectorAll('.banner .bannerl>ul>li');
	let ulss=document.querySelectorAll('.banner .bannerl>ul>li>ul');

	for(let i=0;i<10;i++){
		// lis2[i].txt=i;
		lis2[i].onmouseenter=function(){
			ulss[i].style.display='block';
		}
		lis2[i].onmouseleave=function(){
			ulss[i].style.display='none';
		}
		
	}	

	//单品
	let juxing1=document.querySelector('.danpin .juxing1');
	let juxing2=document.querySelector('.danpin .juxing2');
	let danp=document.querySelector('.danp');
	let danpind=document.querySelectorAll('.danpind');
	let widths=danpind[0].offsetWidth;
	let tt=setInterval(moveDP,2000);;
	let dpcurr=0,dpnext=0,flagdp=true;

	danp.onmouseenter=function(){
		clearInterval(tt);
	}
	danp.onmouseleave=function(){
		tt=setInterval(moveDP,2000);
	}
	for(let i=0;i<danpind.length;i++){
		if(i==0){
			continue;	
		}
		danpind[i].style.left=widths+'px';
	}
	function moveDP(){
		dpnext++;
		if(dpnext==danpind.length){
			dpnext=0;
		}
		//左移
		if(dpnext==0){
			danpind[dpnext].style.left=widths+'px';
			juxing2.style.color='#E1E0E0';
			juxing1.style.color=' #B0B0B4';
			animate(danpind[dpcurr],{left:-widths});
			animate(danpind[dpnext],{left:0});
			dpcurr=dpnext;
		}else if(dpnext==1){
			//右移
			danpind[dpnext].style.left=-widths+'px';
			juxing1.style.color='#E1E0E0';
			juxing2.style.color='#B0B0B4';
			animate(danpind[dpcurr],{left:widths});
			animate(danpind[dpnext],{left:0});
			dpcurr=dpnext;
		}
	}
	juxing1.onmouseenter=function(){
		clearInterval(tt);
	}
	juxing1.onmouseleave=function(){
		tt=setInterval(moveDP,2000);
	}
	juxing2.onmouseenter=function(){
		clearInterval(tt);
	}
	juxing2.onmouseleave=function(){
		tt=setInterval(moveDP,2000);
	}
	//往右走
	juxing1.onclick=function(){
		if(flagdp){
			flagdp=false;
			danpind[0].style.left=-widths+'px';
			juxing1.style.color='#E1E0E0';
			juxing2.style.color='#B0B0B4';
			animate(danpind[dpcurr],{left:widths});
			animate(danpind[0],{left:0});
			dpcurr=0;	
		}
	}
	//往左走
	juxing2.onclick=function(){
		if(!flagdp){
			flagdp=true;
			danpind[1].style.left=widths+'px';
			juxing2.style.color='#E1E0E0';
			juxing1.style.color=' #B0B0B4';
			animate(danpind[dpcurr],{left:-widths});
			animate(danpind[1],{left:0});
			dpcurr=1;
		}
		
	}

	//搭配
	let dppb=document.querySelectorAll('.dapeis .daplb .dapb');
	let dplis=document.querySelectorAll('.dapeis .daps ul li');
	let dpa=document.querySelectorAll('.dapeis .daps ul li a');
	let dpspan=document.querySelectorAll('.dapeis .daps ul li a span');
	let dpindex=0;
	//鼠标移入事件
	for(let i=0;i<dplis.length;i++){
		dplis[i].onmouseenter=function(){
			for(let j=0;j<dplis.length;j++){
				dpa[j].classList.remove('hot');
				dpspan[j].classList.remove('hots');
				dppb[j].style.display='none';
			}
			dpa[i].classList.add('hot');
			dpspan[i].classList.add('hots');
			dppb[i].style.display='block';
			dpindex=i;
		}
	}
	
	//配件
	let pjpb=document.querySelectorAll('.peijian .daplb .dapb');
	let pjlis=document.querySelectorAll('.peijian .daps ul li');
	let pja=document.querySelectorAll('.peijian .daps ul li a');
	let pjspan=document.querySelectorAll('.peijian .daps ul li a span');
	let pjindex=0;
	//鼠标移入事件
	for(let i=0;i<pjlis.length;i++){
		pjlis[i].onmouseenter=function(){
			for(let j=0;j<pjlis.length;j++){
				pja[j].classList.remove('hot');
				pjspan[j].classList.remove('hots');
				pjpb[j].style.display='none';
			}
			pja[i].classList.add('hot');
			pjspan[i].classList.add('hots');
			pjpb[i].style.display='block';
			pjindex=i;
		}
	}

	//周边
	let zbpb=document.querySelectorAll('.zhoubian .daplb .dapb');
	let zblis=document.querySelectorAll('.zhoubian .daps ul li');
	let zba=document.querySelectorAll('.zhoubian .daps ul li a');
	let zbspan=document.querySelectorAll('.zhoubian .daps ul li a span');
	let zbindex=0;
	//鼠标移入事件
	for(let i=0;i<zblis.length;i++){
		zblis[i].onmouseenter=function(){
			for(let j=0;j<zblis.length;j++){
				zba[j].classList.remove('hot');
				zbspan[j].classList.remove('hots');
				zbpb[j].style.display='none';
			}
			zba[i].classList.add('hot');
			zbspan[i].classList.add('hots');
			zbpb[i].style.display='block';
			zbindex=i;
		}
	}

	//为你推荐
	
	let jx1=document.querySelector('.tui .tuijian .juxing1');
	let jx2=document.querySelector('.tui .tuijian .juxing2');
	let tuij=document.querySelector('.tui .tuij');
	let tu=document.querySelectorAll('.tui .tuij .tuijs');
	let widthss=tu[0].offsetWidth;
	let dt=setInterval(moveTJ,2000);
	let tjcurr=0,tjnext=0,flagtj=true;

	tuij.onmouseenter=function(){
		clearInterval(dt);
	}
	tuij.onmouseleave=function(){
		dt=setInterval(moveTJ,2000);
	}
	for(let i=0;i<tu.length;i++){
		if(i==0){
			continue;	
		}
		tu[i].style.left=widthss+'px';
	}
	function moveTJ(){
		tjnext++;
		if(tjnext==tu.length){
			tjnext=0;
		}
		//左移
		if(tjnext==0){
			tu[tjnext].style.left=widthss+'px';
			jx2.style.color='#E1E0E0';
			jx1.style.color=' #B0B0B4';
			animate(tu[tjcurr],{left:-widthss});
			animate(tu[tjnext],{left:0});
			tjcurr=tjnext;
		}else if(tjnext==1){
			//右移
			tu[tjnext].style.left=-widthss+'px';
			jx1.style.color='#E1E0E0';
			jx2.style.color='#B0B0B4';
			animate(tu[tjcurr],{left:widthss});
			animate(tu[tjnext],{left:0});
			tjcurr=tjnext;
		}
	}
	jx1.onmouseenter=function(){
		clearInterval(dt);
	}
	jx1.onmouseleave=function(){
		dt=setInterval(moveTJ,2000);
	}
	jx2.onmouseenter=function(){
		clearInterval(dt);
	}
	jx2.onmouseleave=function(){
		dt=setInterval(moveTJ,2000);
	}
	//往右走
	jx1.onclick=function(){
		if(flagtj){
			flagtj=false;
			tu[0].style.left=-widthss+'px';
			jx1.style.color='#E1E0E0';
			jx2.style.color='#B0B0B4';
			animate(tu[tjcurr],{left:widthss});
			animate(tu[0],{left:0});
			tjcurr=0;	
		}
	}
	//往左走
	jx2.onclick=function(){
		if(!flagtj){
			flagtj=true;
			tu[1].style.left=widthss+'px';
			jx2.style.color='#E1E0E0';
			jx1.style.color=' #B0B0B4';
			animate(tu[tjcurr],{left:-widthss});
			animate(tu[1],{left:0});
			tjcurr=1;
		}	
	}		
		
	//内容1
	let zuo1=document.querySelector('.neirong .wentu .kuai .zuom');
	let you1=document.querySelector('.neirong .wentu .kuai .youm');
	let xia1=document.querySelectorAll('.neirong .wentu .kuai .xia');
	let dian1=document.querySelectorAll('.neirong .wentu .kuai .dian span');
	let nrflag=true,nrflags=true;
	let nrcurr=0,nrnext=0;
	let nrwidth=xia1[0].offsetWidth;

	zuo1.onclick=function(){
		if(nrflag){
			nrflag=false;
			moveNRL();
		}
	}
	you1.onclick=function(){
		if(nrflags){
			nrflags=false;
			moveNRR();
		}
	}
	//将图片排到右侧
	for(let i=0;i<xia1.length;i++){
		if(i==0){
			continue;
		}
		xia1[i].style.left=nrwidth+'px';
	}
	//点击左侧，图片右移
	function moveNRL(){
		nrnext--;
		if(nrnext<=0){
			zuo1.onclick=null;
			you1.onclick=function(){moveNRR();}
			// nrnext=0;
		}
		xia1[nrnext].style.left=-nrwidth+'px';
		dian1[nrcurr].classList.remove('quan');
		dian1[nrnext].classList.add('quan');
		animate(xia1[nrcurr],{left:nrwidth});
		animate(xia1[nrnext],{left:0},function(){
			nrflag=true;
		});
		nrcurr=nrnext;
	}
	//点击右侧，图片左移
	function moveNRR(){
		nrnext++;
		if(nrnext>=xia1.length-1){
			you1.onclick=null;
			zuo1.onclick=function(){moveNRL();}
			nrnext=xia1.length-1;
			
		}
		xia1[nrnext].style.left=nrwidth+'px';
		dian1[nrcurr].classList.remove('quan');
		dian1[nrnext].classList.add('quan');
		animate(xia1[nrcurr],{left:-nrwidth});
		animate(xia1[nrnext],{left:0},function(){
			nrflags=true;
		});
		nrcurr=nrnext;
	}
	dian1.forEach(function(value,index,obj){
		value.onclick=function(){
			dian1[nrcurr].classList.remove('quan');
			this.classList.add('quan');
			if(nrcurr==index){
				return ;
			}
			if(nrcurr<index){
				xia1[index].style.left=nrwidth+'px';
				animate(xia1[nrcurr],{left:-nrwidth});
				animate(xia1[index],{left:0});
				nrcurr=nrnext=index;
			}else if(nrcurr>index){
				xia1[index].style.left=-nrwidth+'px';
				animate(xia1[nrcurr],{left:nrwidth});
				animate(xia1[index],{left:0});
				nrcurr=nrnext=index;
			}
		}
	})

	// 内容2
	let zuo2=document.querySelector('.neirong .wentu .kuai2 .zuom');
	let you2=document.querySelector('.neirong .wentu .kuai2 .youm');
	let xia2=document.querySelectorAll('.neirong .wentu .kuai2 .xia');
	let dian2=document.querySelectorAll('.neirong .wentu .kuai2 .dian span');
	let nrflag2=true,nrflags2=true;
	let nrcurr2=0,nrnex2=0;
	// let nrwidth=xia2[0].offsetWidth;

	zuo2.onclick=function(){
		if(nrflag2){
			nrflag2=false;
			moveNRL2();
		}
	}
	you2.onclick=function(){
		if(nrflags2){
			nrflags2=false;
			moveNRR2();
		}
	}
	//将图片排到右侧
	for(let i=0;i<xia2.length;i++){
		if(i==0){
			continue;
		}
		xia2[i].style.left=nrwidth+'px';
	}
	//点击左侧，图片右移
	function moveNRL2(){
		nrnex2--;
		if(nrnex2<=0){
			zuo2.onclick=null;
			you2.onclick=function(){moveNRR2();}
			// nrnet2=0;
		}
		xia2[nrnex2].style.left=-nrwidth+'px';
		dian2[nrcurr2].classList.remove('quan');
		dian2[nrnex2].classList.add('quan');
		animate(xia2[nrcurr2],{left:nrwidth});
		animate(xia2[nrnex2],{left:0},function(){
			nrflag2=true;
		});
		nrcurr2=nrnex2;
	}
	//点击右侧，图片左移
	function moveNRR2(){
		nrnex2++;
		if(nrnex2>=xia2.length-1){
			you2.onclick=null;
			zuo2.onclick=function(){moveNRL2();}
			nrnex2=xia2.length-1;
		}
		xia2[nrnex2].style.left=nrwidth+'px';
		dian2[nrcurr2].classList.remove('quan');
		dian2[nrnex2].classList.add('quan');
		animate(xia2[nrcurr2],{left:-nrwidth});
		animate(xia2[nrnex2],{left:0},function(){
			nrflags2=true;
		});
		nrcurr2=nrnex2;
	}
	dian2.forEach(function(value,index){
		value.onclick=function(){
			dian2[nrcurr2].classList.remove('quan');
			this.classList.add('quan');
			if(nrcurr2==index){
				return ;
			}
			if(nrcurr2<index){
				xia2[index].style.left=nrwidth+'px';
				animate(xia2[nrcurr2],{left:-nrwidth});
				animate(xia2[index],{left:0});
				nrcurr2=nrnex2=index;
			}else if(nrcurr2>index){
				xia2[index].style.left=-nrwidth+'px';
				animate(xia2[nrcurr2],{left:nrwidth});
				animate(xia2[index],{left:0});
				nrcurr2=nrnex2=index;
			}
		}
	})
	// 内容3
	let zuo3=document.querySelector('.neirong .wentu .kuai3 .zuom');
	let you3=document.querySelector('.neirong .wentu .kuai3 .youm');
	let xia3=document.querySelectorAll('.neirong .wentu .kuai3 .xia');
	let dian3=document.querySelectorAll('.neirong .wentu .kuai3 .dian span');
	let nrflag3=true,nrflags3=true;
	let nrcurr3=0,nrnex3=0;

	zuo3.onclick=function(){
		if(nrflag3){
			nrflag3=false;
			moveNRL3();
		}
	}
	you3.onclick=function(){
		if(nrflags3){
			nrflags3=false;
			moveNRR3();
		}
	}
	//将图片排到右侧
	for(let i=0;i<xia3.length;i++){
		if(i==0){
			continue;
		}
		xia3[i].style.left=nrwidth+'px';
	}
	//点击左侧，图片右移
	function moveNRL3(){
		nrnex3--;
		if(nrnex3<=0){
			zuo3.onclick=null;
			you3.onclick=function(){moveNRR3();}
			// nrnex3=0;
		}
		
		xia3[nrnex3].style.left=-nrwidth+'px';
		dian3[nrcurr3].classList.remove('quan');
		dian3[nrnex3].classList.add('quan');
		animate(xia3[nrcurr3],{left:nrwidth});
		animate(xia3[nrnex3],{left:0},function(){
			nrflag3=true;
		});
		nrcurr3=nrnex3;
	}
	//点击右侧，图片左移
	function moveNRR3(){
		nrnex3++;
		if(nrnex3>=xia3.length-1){
			you3.onclick=null;
			zuo3.onclick=function(){moveNRL3();}
			nrnex3=xia3.length-1;
		}

		xia3[nrnex3].style.left=nrwidth+'px';
		dian3[nrcurr3].classList.remove('quan');
		dian3[nrnex3].classList.add('quan');
		animate(xia3[nrcurr3],{left:-nrwidth});
		animate(xia3[nrnex3],{left:0},function(){
			nrflags3=true;
		});
		nrcurr3=nrnex3;
	}
	dian3.forEach(function(value,index){
		value.onclick=function(){
			dian3[nrcurr3].classList.remove('quan');
			this.classList.add('quan');
			if(nrcurr3==index){
				return ;
			}
			if(nrcurr3<index){
				xia3[index].style.left=nrwidth+'px';
				animate(xia3[nrcurr3],{left:-nrwidth});
				animate(xia3[index],{left:0});
				nrcurr3=nrnex3=index;
			}else if(nrcurr3>index){
				xia3[index].style.left=-nrwidth+'px';
				animate(xia3[nrcurr3],{left:nrwidth});
				animate(xia3[index],{left:0});
				nrcurr3=nrnex3=index;
			}
		}
	})
	// 内容4
	let zuo4=document.querySelector('.neirong .wentu .kuai4 .zuom');
	let you4=document.querySelector('.neirong .wentu .kuai4 .youm');
	let xia4=document.querySelectorAll('.neirong .wentu .kuai4 .xia');
	let dian4=document.querySelectorAll('.neirong .wentu .kuai4 .dian span');
	let nrflag4=true,nrflags4=true;
	let nrcurr4=0,nrnex4=0;
	// let nrwidth=xia4[0].offsetWidth;

	zuo4.onclick=function(){
		if(nrflag4){
			nrflag4=false;
			moveNRL4();
		}
	}
	you4.onclick=function(){
		if(nrflags4){
			nrflags4=false;
			moveNRR4();
		}
	}
	//将图片排到右侧
	for(let i=0;i<xia4.length;i++){
		if(i==0){
			continue;
		}
		xia4[i].style.left=nrwidth+'px';
	}
	//点击左侧，图片右移
	function moveNRL4(){
		nrnex4--;
		if(nrnex4<=0){
			zuo4.onclick=null;
			you4.onclick=function(){moveNRR4();}
			// nrnex4=0;
		}
		xia4[nrnex4].style.left=-nrwidth+'px';
		dian4[nrcurr4].classList.remove('quan');
		dian4[nrnex4].classList.add('quan');
		animate(xia4[nrcurr4],{left:nrwidth});
		animate(xia4[nrnex4],{left:0},function(){
			nrflag4=true;
		});
		nrcurr4=nrnex4;
	}
	//点击右侧，图片左移
	function moveNRR4(){
		nrnex4++;
		if(nrnex4>=xia4.length-1){
			you4.onclick=null;
			zuo4.onclick=function(){moveNRL4();}
			nrnex4=xia4.length-1;
		}
		xia4[nrnex4].style.left=nrwidth+'px';
		dian4[nrcurr4].classList.remove('quan');
		dian4[nrnex4].classList.add('quan');
		animate(xia4[nrcurr4],{left:-nrwidth});
		animate(xia4[nrnex4],{left:0},function(){
			nrflags4=true;
		});
		nrcurr4=nrnex4;
	}
	dian4.forEach(function(value,index){
		value.onclick=function(){
			dian4[nrcurr4].classList.remove('quan');
			this.classList.add('quan');
			if(nrcurr4==index){
				return ;
			}
			if(nrcurr4<index){
				xia4[index].style.left=nrwidth+'px';
				animate(xia4[nrcurr4],{left:-nrwidth});
				animate(xia4[index],{left:0});
				nrcurr4=nrnex4=index;
			}else if(nrcurr4>index){
				xia4[index].style.left=-nrwidth+'px';
				animate(xia4[nrcurr4],{left:nrwidth});
				animate(xia4[index],{left:0});
				nrcurr4=nrnex4=index;
			}
		}
	})


	//按序加载
	let ch=window.innerHeight;
	let floors=document.querySelectorAll('.floor');
	let arr=[];
	floors.forEach(function(value,index){
        arr.push(value.offsetTop);
	})
	window.onscroll=function(){
		let tops=document.body.scrollTop;
		for(let i=0;i<arr.length;i++){
			if(tops+ch>arr[i]+200){
              floors[i].style.opacity=1;
           }
		}
		
	}
	console.log(floors)

})
