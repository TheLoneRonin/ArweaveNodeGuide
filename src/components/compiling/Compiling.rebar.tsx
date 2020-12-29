import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Button } from '@chakra-ui/core';
import { GuideContainer } from '../../theme/Guide.theme';

export const Selector = `compiling-rebar`;
export const Text = `# Clone the Arweave Github repo
git clone --recursive https://github.com/ArweaveTeam/arweave.git
cd arweave

# Run the rebar3 binary
./rebar3 as prod tar

# After a few minutes, it should output something like:
===> tarball ~/arweave/_build/prod/rel/arweave/arweave-2.3.0.0.tar.gz successfully created!`;

export function CompilingRebar() {
    return(
        <GuideContainer>
            <p>
              When you compile the project with rebar. Please make sure that you clone the Github repo with the --recursive
              flag. This is necessary in order to clone the submodules for the project as well.
            </p>

            <div className="copy-button">
              <Button
                size="sm"
                onClick={e => {
                    const el: any = document.querySelector('textarea.' + Selector);
                    el.select();
                    el.setSelectionRange(0, 99999);
                    document.execCommand('copy');
              }}>
                Copy
              </Button>
              <textarea defaultValue={Text} style={{ overflow: 'hidden', height: 1, opacity: 0 }} className={Selector}/>
            </div>

            <SyntaxHighlighter language="shell" style={style}>{Text}</SyntaxHighlighter>
        </GuideContainer>
    );
}