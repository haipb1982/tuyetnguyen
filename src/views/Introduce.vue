<template>
	<div class="banner">
		<div class="container">
			<div class="banner-box">
				<div class="banner-item">
					<div v-for="(image, idx) in detail" :key="idx">
						<img :src="image" />
					</div>
					<div class="content">
						<p class="text">
							{{ introduce }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			introduce: null,
			detail: null,
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		async fetch() {

			await this.$store.dispatch("HOME_PAGE_LIST").then((res) => {
			this.introduce = res.obj_list[0].text;
			if (res) {
				// console.log(res.obj_list[0].id);
				let id = res.obj_list[0].id;
				this.getdetail(id);
			}
			});

		},
		async getdetail(id) {
			await this.$store.dispatch("HOME_PAGE_DETAIL", id).then((res) => {
			this.detail = res.homepage.images;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.banner {
	&-box {
		position: relative;
	}

	&-item {
		position: relative;

		img {
			position: relative;
			z-index: 1;
		}
		.content {
			padding: 32px 30px;
			position: absolute;
			right: 20px;
			bottom: 20px;
			z-index: 2;
			border-radius: 17px;
			background-color: #eab875;
			color: #fff;
			max-width: 70%;
			font-size: 14px;
			text-align: justify;
		}

		.content p {
			margin-bottom: 10px;
		}

		.content p:nth-last-child(1) {
			margin-bottom: 0;
		}
	}
}
@media (max-width: 991px) {
	.banner {
		.container{
			padding: 0;
		}
	}
}
@media (max-width: 767px) {
.banner {
		.container{
			padding: 0;
		}
		&-item {
			position: relative;

			img {
				position: relative;
				z-index: 1;
			}

			.content {
				padding: 12px 20px;
				position: relative;
				right: 0;
				bottom: 0;
				border-radius: 0;
				max-width: 100%;
			}
		}
	}
}
</style>
