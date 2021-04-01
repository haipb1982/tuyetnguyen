<template>
	<div>
		<Introduce />

		<div class="spe container"></div>

		<Collection />
	</div>
</template>

<script>
import Introduce from "./Introduce";
import Collection from "./Collection";

export default {
	components: {
		Introduce,
		Collection,
	},
};
</script>

<style>
.spe {
	margin: 20px auto;
	height: 2px;
	background: #e9c993;
	background: -webkit-gradient(
		linear,
		left top,
		right top,
		from(rgba(233, 201, 147, 0)),
		color-stop(20%, #e0ac6c),
		color-stop(80%, #e0ac6c),
		to(rgba(224, 172, 108, 0))
	);
	background: -webkit-linear-gradient(
		left,
		rgba(233, 201, 147, 0) 0%,
		#e0ac6c 20%,
		#e0ac6c 80%,
		rgba(224, 172, 108, 0) 100%
	);
	background: -o-linear-gradient(
		left,
		rgba(233, 201, 147, 0) 0%,
		#e0ac6c 20%,
		#e0ac6c 80%,
		rgba(224, 172, 108, 0) 100%
	);
	background: linear-gradient(
		90deg,
		rgba(233, 201, 147, 0) 0%,
		#e0ac6c 20%,
		#e0ac6c 80%,
		rgba(224, 172, 108, 0) 100%
	);
}
</style>
