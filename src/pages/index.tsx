import Head from 'next/head';
import { AppContainer } from '../theme/App.theme';
import { Title } from '../components/Title';
import { Navigation } from '../components/Navigation';
import { ReqCompilation } from '../components/req/Req.compilation';
import { CompilingRebar } from '../components/compiling/Compiling.rebar';
import { CompilingTargz } from '../components/compiling/Compiling.targz';
import { CompilingFile } from '../components/compiling/Compiling.file';
import { CompilingCommands } from '../components/compiling/Compiling.commands';
import { CompilingMine } from '../components/compiling/Compiling.mine';

export default function Index() {
  return (
    <AppContainer>
      <Head>
        <title>Arweave Node Guide</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content={`An interactive and comprehensive Arweave Guide to deploy Nodes and Gateways`}/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={`Arweave Node Guide`}/>
        <meta name="twitter:description" content={`An interactive and comprehensive Arweave Guide to deploy Nodes and Gateways`}/>

        <meta property="og:title" content={`Arweave Node Guide`}/>
        <meta property="og:image" content="https://gql-guide.vercel.app/logo.jpg"/>
        <meta property="og:description" content={`An interactive and comprehensive Arweave Guide to deploy Nodes and Gateways`}/>

        <link rel="icon" type="image/jpg" href="/logo.jpg"/>
      </Head>

      <Title/>

      <div className="content">
        <Navigation />
        <div className="content-panel">
          <h2 id="req">Requirements</h2>

          <p>
            In order to compile and run an Arweave node or Gateway. You will need to be running a Unix based operating
            system. This guide has been primarily tested on Ubuntu 18.04 and 20.04, if you do have problems compiling
            from scratch on a different OS, try using Docker instead. Lastly, for reference purposes, you may want to
            check out the <a href="https://github.com/ArweaveTeam/arweave" target="github">Arweave Github</a> to learn
            more about the source code.
          </p>

          <h3 className="lg" id="req-compile">For Compilation</h3>
          <ReqCompilation/>

          <h3 className="lg" id="req-docker">For Docker</h3>
          <p style={{ margin: '0 0 45px 0'}}>Implementation currently pending...</p>

          <h2 id="compiling">Compilation</h2>

          <h3 className="lg" id="compiling-rebar">Building with rebar</h3>
          <CompilingRebar />

          <h3 className="lg" id="compiling-targz">Decompressing the tar.gz file</h3>
          <CompilingTargz />
          
          <h3 className="lg" id="compiling-file">Adjusting The File Descriptor Limit</h3>
          <CompilingFile />
          
          <h3 className="lg" id="compiling-run">Running Commands</h3>
          <CompilingCommands />
          
          <h3 className="lg" id="compiling-mine">Start Mining</h3>
          <CompilingMine/>
        </div>
      </div>
    </AppContainer>
  )
}
