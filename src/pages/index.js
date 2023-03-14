import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image src="https://uploads.quarkly.io/6410bdb03dedc4001fc8da91/images/JM24%20%28180%20%C3%97%2060%20px%29%20logo.png?v=2023-03-14T18:40:36.207Z" display="block" />
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section
			padding="140px 0 140px 0"
			background="#FFFFFF url(https://images.unsplash.com/photo-1533670803344-afe2e89e5493?auto=format&fit=crop&w=1500&q=80) 100% 100% /100% no-repeat scroll padding-box"
			min-height="100vh"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Comfort is Now Beautiful
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Box display="flex" sm-flex-direction="column" sm-text-align="center">
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--dark"
						background="--color-secondary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="--color-orange"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
					>
						Get Started
					</Link>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--darkL1"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						border-width="2px"
						border-style="solid"
						border-color="--color-darkL1"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						lg-margin="0px 0px 0px 0px"
						hover-transition="border 0.2s ease-in-out 0s"
						hover-border-color="--color-orange"
						transition="border 0.2s ease-in-out 0s"
					>
						Check our video
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
			/>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0 40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="360px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m David
				</Text>
				<Text font="--base">
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 0px"
				justify-content="center"
				lg-order="1"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					See the world & spend less always
				</Text>
				<Text margin="0px 0px 40px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Link
					href="#"
					padding="12px 24px 12px 24px"
					color="--light"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 16px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					sm-margin="0px 0px 16px 0px"
					sm-text-align="center"
					background="--color-green"
					hover-transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-primary"
				>
					Get Started
				</Link>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 32px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 32px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			>
				<Image
					src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80"
					object-fit="cover"
					width="100%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					min-height="600px"
					max-width="480px"
					sm-min-height="100vw"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6410bdb03dedc4001fc8da8f"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});