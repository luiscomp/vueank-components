<template>
  <Example fullWidth>
    <template #demos>
		<span>Default</span>
		<sf-alert border>
			<template #title>
				Bordered
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>

		<span style="margin-top: 26px">Color</span>
		<sf-alert type="success" border>
			<template #title>
				Success
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>

		<span style="margin-top: 26px">Shadowed</span>
		<sf-alert type="warn" border shadow>
			<template #title>
				Warn
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>
		<sf-alert type="danger" border shadow>
			<template #title>
				Danger
			</template>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
		</sf-alert>
    </template>
  </Example>
</template>
