
function $(selector,rander=document){//从指定范围找
 let type=typeof selector;

 if(type=='string'){
 	let sel=selector.trim();
 	let first=sel.charAt(0);
 	if(first=='.'){
	   return rander.getElementsByClassName(sel.substring(1));
 	}else if(first=='#'){
 	   return document.getElementById(sel.substring(1));
 	}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(sel)){//以a-z开头,第三个表示出现的次数
 		return rander.getElementsByTagName(sel);
 	}
 }else if(type=='function'){
 	window.onload=function(){
 		selector();
 	}
 }
 
} 

/*
	html(obj[,内容content])  

	设置/设置某个元素的内容
	obj  指定的对象  
	content 设置内容,若没有传，表示获取；传值表示设置
	
 */
function html(obj,content){
	if(content){
		obj.innerHTML=content;
	}else{
		 return obj.innerHTML;
	}
}

/*
获取指定元素的子元素节点
	1.获取所有子节点
	2.筛选
 */
function getChilds(obj){
	let childs=obj.childNodes;
	let arr=[];
	childs.forEach(function(value){
		if(value.nodeType==1){
			arr.push(value);
		}
	});
	return arr;
}
/*
获取元素节点的第一个子节点
 */
function getFirst(obj){
	let childs=getChilds(obj);
	return childs[0];
}
/*
获取元素节点的最后一个子节点
 */
function getLast(obj){
	let childs=getChilds(obj);
	return childs[childs.length-1];
}
/*
getNum 获取元素节点的任意个子节点

 */
function getNum(obj,num){
	let childs=getChilds(obj);
	return childs[num];
}
/*
getNext
	1.下一个兄弟节点 a
	2.不是 a下一个兄弟节点  b
	......
 */
function getNext(obj){
	let a=obj.nextSibling;
	if(a==null){
		return  '该元素为最后一个';
	}
	while(a.nodeType!=1){
		a=a.nextSibling;
		if(a==null){
			return  '没有找到';
		}
	}
	return a;
}

function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}