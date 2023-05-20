<template>
	<NuxtLink to="/">
		<nav class="navbar">
			<div class="navbarItemContainer">
				<h1 class="navbarTitle">Özgür Yazar</h1>
				<div>
					<NavbarButton button-name="Giriş Yap" to="/auth/login" />
					<NavbarButton button-name="Kayıt Ol" to="/auth/register" />
				</div>
			</div>
		</nav>
	</NuxtLink>
</template>
<style scoped>
	.navbar {
		@apply border-black h-14 border-b-2 w-full;
	}
	.navbarItemContainer {
		@apply container flex flex-row justify-between m-auto items-center;
	}
	.navbarTitle {
		@apply m-2 text-2xl font-bold;
	}
</style>
