import Head from "next/head";
import { Card, Container, Link, Navbar, Spacer, Text, Row, Divider, Grid, Image, Collapse,Col,Button} from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"

function getnavbar() {
        return (
            <>
            <Navbar color="#ffffffff" variant="floating" className="navbar">
                <Navbar.Brand>
                    <Text h3 css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Elbrusya</Text>
                </Navbar.Brand>
                <Navbar.Content activeColor="secondary">
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link isActive href="/saved">My Courses</Navbar.Link>
                <Navbar.Link href="" onClick={signOut}>SignOut</Navbar.Link>
                </Navbar.Content>
            </Navbar>
            </>
        )
}

function play(btn) {document.getElementById(btn.target.id).play()}

export default function Courses(propz) {
    const { data: session } = useSession()
    const props={"courses":[{"name":"Test Course",id:"uwu","url":"https://vod-progressive.akamaized.net/exp=1670265976~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2931%2F23%2F589655407%2F2781013183.mp4~hmac=4b51ee223b203d5287f59518e2f444f9f5c266a6a0842d78534ed7c022e5a954/vimeo-prod-skyfire-std-us/01/2931/23/589655407/2781013183.mp4"}]}
    
    if (session){}else{return (<>Please SignIn before you can access this page<br></br><Button onClick={signIn}>SignIn</Button></>)}
    return (
        <>
            <Head>
                <title>Elbrusya</title>
            </Head>
            {getnavbar()}
            <Spacer/>
            <Text h2 color="primary" css={{"text-align":"center"}}>Your Courses</Text>
            <Grid.Container gap={2} justify="flex-start">
            {props["courses"].map((item, index) => (
                <Grid xs={6} sm={3} key={index}>
                <Card isPressable css={{height:420,minWidth:500}}>
                <video src={item.url} id={item.id} muted={false}/>
                <Text css={{"text-align":"center"}}>{item.name}</Text>
                <Spacer/>
                <Button css={{width:100,margin:"auto"}} id={item.id} onClick={play}>Play</Button>
                <Spacer/>
                </Card>
                </Grid>
            ))}
            </Grid.Container>
        

        <Spacer y={30}/>
        </>
    )
}

export async function getServerSideProps(context) {
    const PandaDB = require('panda-db');
    const DB = new PandaDB({
        name: "testing",
        dir: "./database"
    });
    if (DB.has("alu")) {
        return {
            props: {"courses":DB.get("alu")}
        }
    }else{}
    return (
        {
      props: {"courses":[]}, // will be passed to the page component as props
    }
    )
}