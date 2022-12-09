import Head from "next/head";
import { Card, Container, Link, Navbar, Spacer, Text, Row, Divider, Grid, Image, Collapse,Col,Button} from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"

const Stats = ({title, body}) => {
    return (
    <Card blur="true" isPressable isCompact isHoverable isblurred="true" variant="bordered" css={{padding: 2, bgBlur: "#0f111466"}}>
        <Card.Header><Text h2 color="secondary" css={{"text-align":"center"}}>{title}</Text></Card.Header>
        <Card.Body><Text h4 color="primary" css={{"text-align":"center"}}>{body}</Text></Card.Body>
    </Card>
    )
}

function getnavbar() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
            <Navbar color="#ffffffff" variant="floating" className="navbar">
                <Navbar.Brand>
                    <Text h3 css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Elbrusya</Text>
                </Navbar.Brand>
                <Navbar.Content activeColor="secondary">
                <Navbar.Link isActive href="/">Home</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/saved">My Courses</Navbar.Link>
                <Navbar.Link href="" onClick={signOut}>SignOut</Navbar.Link>
                </Navbar.Content>
            </Navbar>
            </>
        )
    }else{
        return (<>
            <Navbar color="#ffffffff" variant="floating" className="navbar">
                <Navbar.Brand>
                    <Text h3 css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Elbrusya</Text>
                </Navbar.Brand>
                <Navbar.Content activeColor="secondary">
                <Navbar.Link isActive href="/">Home</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="" onClick={signIn}>SignIn</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </>)
    }
}

export default function Home(props) {
    const list = [
        {
            title: "Basic Animation",
            img: "/images/fruit-8.jpeg",
            price: "299",
        },
        {
            title: "Advanced Animation",
            img: "/images/fruit-8.jpeg",
            price: "399",
        },
        {
            title: "Youtube Crash Course",
            img: "/images/fruit-8.jpeg",
            price: "99",
        },
        {
            title: "Youtube Element Course",
            img: "/images/fruit-8.jpeg",
            price: "99",
        },
    ];
    return (
        <>
            <Head>
                <title>Elbrusya</title>
            </Head>
            {getnavbar()}
            <Spacer/>
            <Container>
                <Text h1 css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold">
                    Helping Creators,
                </Text>
                <Text h1 css={{textGradient: "45deg, $yellow600 -20%, $red600 100%",}} weight="bold">
                    by providing assistance and courses.
                </Text>
                <Spacer/>
                <Text h4>We aim to help every creator who is working very hard but is not seeing any results.</Text>
                <Spacer y={2}/>
                <Row gap={1}>
                        <Stats title="2 times" body="More Affordable"/>
                        <Spacer/>
                        <Stats title="24/7" body="Support"/>
                        <Spacer/>
                        <Stats title="5+" body="Courses"/>
                </Row>
                <Spacer y={1}/>
            </Container>
            <Text h2 color="primary" css={{"text-align":"center"}}>Our Courses</Text>
            <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                    <Grid xs={6} sm={3} key={index}>
                        <Card css={{ w: "100%", h: "400px" }}>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA"> New </Text>
                                <Text h3 color="white"> {item.title} </Text>
                            </Col>
                            </Card.Header>
                            <Card.Body css={{ p: 0 }}>
                            <Card.Image src="https://nextui.org/images/card-example-3.jpeg" width="100%" height="100%" objectFit="cover"/>
                            </Card.Body>
                            <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#ffffff66",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                            }}
                            >
                            <Row>
                                <Col>
                                <Text color="#000" size={12}>
                                    ₹{item.price}
                                </Text>
                                </Col>
                                <Col>
                                <Row justify="flex-end">
                                    <Button flat auto rounded color="secondary">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        Buy
                                    </Text>
                                    </Button>
                                </Row>
                                </Col>
                            </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </>
    )
}