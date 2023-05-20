<template>
	<nav class="navbar">
		<div class="navbarItemContainer">
			<NuxtLink to="/">
				<h1 class="navbarTitle">Özgür Yazar</h1>
			</NuxtLink>
			<div>
				<NavbarButton button-name="Giriş Yap" to="/auth/login" />
				<NavbarButton button-name="Kayıt Ol" to="/auth/register" />
			</div>
		</div>
	</nav>
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
