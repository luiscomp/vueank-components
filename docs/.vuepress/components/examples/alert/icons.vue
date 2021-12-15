<template>
  <Example fullWidth>
    <template #demos>
		<span>Default</span>
		<sf-alert icon="alert-octagram">
			<template #title>
				Icon
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>

		<span style="margin-top: 26px">Color</span>
		<sf-alert type="success" icon="check-all">
			<template #title>
				Success
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>

		<span style="margin-top: 26px">Shadowed</span>
		<sf-alert type="warn" shadow icon="layers">
			<template #title>
				Warn
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>

		<span style="margin-top: 26px">Bordered</span>
		<sf-alert type="danger" shadow border icon="border-none-variant">
			<template #title>
				Danger
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>
    </template>
  </Example>
</template>
