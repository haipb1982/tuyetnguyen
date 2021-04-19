<template>
	<div class="footer">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="footer-left">
						<div class="logo-footer">
							<img src="@/assets/logota3d.png" alt="Thợ ảnh 3D" />
						</div>
						<span class="develop">Phát triển bời Thợ Ảnh 3D</span>
					</div>
				</div>
				<div class="col-md-6">
					<div class="footer-right">
						<span class="copyright">© 2021 Copyright by Tuyết Nguyễn</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.col-md-6 {
	flex: 0 0 50%;
	max-width: 50%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
}
.footer {
	margin-top: 150px;
	padding: 25px 0;
	background-image: url(../../assets/bg-header.jpg);
	background-size: 100% 100%;
	background-position: left top;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	color: #fff;
	.row {
		flex-wrap: wrap;
	}

	&-left,
	&-right {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 10px 0;
	}
	.logo-footer {
		width: 50px;
		margin-right: 15px;

		img {
			width: 100%;
			height: auto;
		}
	}
	.copyright {
		font-style: italic;
	}
}
@media (max-width: 991px) {
	.col-md-6 {
		flex: 0 0 100%;
		max-width: 100%;
	}
	.footer {
		background-size: cover;
		background-position: center;
		font-size: 14px;
		padding: 15px 0;
		.logo-footer {
			width: 100%;
			margin-right: 0;
			text-align: center;
			img {
				width: 50px;
				height: auto;
				margin-bottom: 8px;
			}
		}
		&-left {
			justify-content: center;
		}
		&-left,
		&-right {
			margin: 5px 0;
		}
	}
}
</style>
