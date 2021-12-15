<template>
  <Example fullWidth>
    <template #demos>
		<span>Default</span>
		<sf-alert shadow>
			<template #title>
				Shadow
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>

		<span style="margin-top: 26px">Color</span>
		<sf-alert type="success" shadow>
			<template #title>
				Success
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>
		<sf-alert type="warn" shadow>
			<template #title>
				Warn
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>
		<sf-alert type="danger" shadow>
			<template #title>
				Danger
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>
    </template>
  </Example>
</template>
