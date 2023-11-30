/*
	二重振り子シミュレーション
	2023/11/30 ESモジュールのクラスに変更
	2020/10/21 新規作成
*/

import RungeKuttaSolver from "./RungeKuttaSolver.js";
import Viewer from "./Viewer.js";

const info = document.getElementById("info");

//min～maxのランダムな値
const random = (min,max) => (max - min) * Math.random() + min;

//条件
const m1 = random(1,5);
const l1 = random(0.1,0.9);
const th1 = random(-3,3);

const m2 = random(1,5);
const l2 = random(0.1,1.0 - l1);
const th2 = random(-3,3);

const g = 9.80665;	//[m/s2]
const m12 = 1 + m1 / m2;

const rks = new RungeKuttaSolver(0.001,[th1,0,th2,0],function(t,x){
	const sinX0 = Math.sin(x[0]);
	const sinX2 = Math.sin(x[2]);
	const sinX02 = Math.sin(x[0] - x[2]);
	const cosX02 = Math.cos(x[0] - x[2]);
	const k1 = l1 * Math.pow(x[1],2);
	const k2 = l2 * Math.pow(x[3],2);
	const f = m12 - Math.pow(cosX02,2);
	
	return [
		x[1],
		(g * (sinX2 * cosX02 - m12 * sinX0) - (k2 + k1 * cosX02) * sinX02) / (l1 * f),
		x[3],
		(g * m12 * (sinX0 * cosX02 - sinX2) + (m12 * k1 + k2 * cosX02) * sinX02) / (l2 * f)
	];
});

const vw = new Viewer("cv",300,300,150);

setInterval(function(){
	const th1 = rks.getX()[0];
	const dth1 = rks.getX()[1];
	const th2 = rks.getX()[2];
	const dth2 = rks.getX()[3];
	
	//速度(x,yの各成分)
	const v1x = l1 * dth1 * Math.cos(th1);
	const v1y = l1 * dth1 * Math.sin(th1);
	const v2x = v1x + l2 * dth2 * Math.cos(th2);
	const v2y = v1y + l2 * dth2 * Math.sin(th2);
	
	//位置(y方向)
	const p1y = -l1 * Math.cos(th1);
	const p2y = p1y - l2 * Math.cos(th2);
	
	//運動エネルギー
	const E1 = m1 * (v1x * v1x + v1y * v1y) * 0.5;
	const E2 = m2 * (v2x * v2x + v2y * v2y) * 0.5;
	
	//位置エネルギー
	const U1 = m1 * g * (l1 + p1y);
	const U2 = m2 * g * (l1 + l2 + p2y);
	
	//表示
	vw.draw(th1,l1,m1,th2,l2,m2);
	
	info.innerHTML = [
		"t[s]=" + rks.getTime().toFixed(2),
		"th1[rad]=" + th1.toFixed(2),
		"th1'[rad/s]=" + dth1.toFixed(2),
		"th2[rad]=" + th2.toFixed(2),
		"th2'[rad/s]=" + dth2.toFixed(2),
		"L1[m]=" + l1.toFixed(2),
		"M1[kg]=" + m1.toFixed(2),
		"L2[m]=" + l2.toFixed(2),
		"M2[kg]=" + m2.toFixed(2),
		"E[J]=" + (E1 + E2 + U1 + U2).toFixed(4),
	].join("<br>");
	
	for(let i=0;i<30;i++) rks.step();
},30);