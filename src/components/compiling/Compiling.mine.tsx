import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Button } from '@chakra-ui/core';
import { GuideContainer } from '../../theme/Guide.theme';

export const Selector = `compiling-mine`;
export const Text = `# go to the prod build folder
cd _build/prod/rel/arweave

# Confirm you can run the start command
./bin/start --help

# Start mining
./bin/start mine`;

export function CompilingMine() {
    return(
        <GuideContainer>
            <p>
							Now that you've successfully compiled and configured your Arweave environment. You can now officially start mining!
							Use the following snippet to start earning Arweave tokens by mining blocks for the network.
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