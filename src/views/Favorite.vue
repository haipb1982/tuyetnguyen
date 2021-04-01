<template>
	<div class="collection wishlist">
		<div class="container">
			<div class="collection-box">
				<h3 class="title-section">cổ vật yêu thích</h3>
				<div class="collection-content">
					<div class="main-content">
						<div class="row product-list">
							<div
								class="product-col"
								v-for="(product, idx) in product_list"
								:key="idx"
							>
								<router-link
									:to="{ name: 'details', params: { id: product.id } }"
								>
									<div class="product-item">
										<div class="product-image">
											<img :src="product.image" />
										</div>
										<div class="product-info">
											<button class="btn btn-wishlist">
												<i class="fas fa-heart"></i>
											</button>
											<a
												href="#"
												class="product-title"
												:v-bind="product.image"
												>{{ product.name }}</a
											>
										</div>
									</div>
								</router-link>
							</div>
						</div>
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
			product_list: null,
			productDetail: null,
			page: 1,
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		async fetch() {
			let page = this.page;
			let res = await this.$store.dispatch("FAVORITE_LIST", page);
			console.log(res);
			this.product_list = res.product_list;
		},
	},
};
</script>

<style></style>
