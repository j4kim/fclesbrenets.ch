<template>
	<svg :style="revert ? {transform:'scale(-1, 1)'} : {}"
		viewBox="0 0 400 520">
		<g :class="animate ? 'animate' : ''">
			<rect x="158.378" y="358.434" transform="matrix(-1 -4.481885e-04 4.481885e-04 -1 355.8783 852.3892)" fill="#8FD7F7" width="39.312" height="135.441"/>
			<rect x="145.975" y="292.272" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 354.2501 670.1063)" fill="#2A2D7C" width="62.301" height="85.562"/>
			<rect x="158.95" y="483.573" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 382.9502 1001.5721)" fill="#231F20" width="65.05" height="34.425"/>
		</g>
		<g>
			<rect x="90.336" y="358.434" fill="#8FD7F7" width="39.151" height="135.441"/>
			<rect x="79.795" y="292.272" fill="#2A2D7C" width="62.045" height="85.562"/>
			<rect x="64.135" y="483.573" fill="#231F20" width="64.782" height="34.425"/>
			<rect x="202.082" y="115.226" transform="matrix(0.933 -0.3599 0.3599 0.933 -52.9307 90.1579)" fill="#FCD1BB" width="27.19" height="144.024"/>
			<rect x="69.441" y="114.087" transform="matrix(0.9956 -0.094 0.094 0.9956 -19.3738 13.7208)" fill="#8FD7F7" width="133.065" height="196.893"/>
			<rect x="122.571" y="23.844" transform="matrix(0.9754 0.2206 -0.2206 0.9754 22.2161 -32.2622)" fill="#FCD1BB" width="65.992" height="119.001"/>
			<rect x="34.64" y="125.16" transform="matrix(0.9754 0.2206 -0.2206 0.9754 48.5565 -5.3504)" fill="#FCD1BB" width="27.19" height="179.167"/>
		</g>
	</svg>
</template>

<script>
import { setTimeout } from 'timers';
export default {
	props:['revert'],
	data(){
		return {
			animate:false
		}
	},
	methods:{
		kick(){
			this.animate = true
			setTimeout(() => {
				this.animate = false
			}, 1500)
		}
	}
}
</script>


<style lang="scss" scoped>

	@keyframes kick {
		0% {transform: rotate(0);}
		10% {transform: rotate(20deg);}
		50% {transform: rotate(-90deg);}
		100% {transform: rotate(0);}
	}

	svg{
		height: 90px;
	}
	.animate{
		transform-origin: 40% 54%;
		animation: kick 1s linear;
	}
</style>