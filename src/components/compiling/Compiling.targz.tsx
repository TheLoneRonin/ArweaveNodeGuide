import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Button } from '@chakra-ui/core';
import { GuideContainer } from '../../theme/Guide.theme';

export const Selector = `compiling-targz`;
export const Text = `# Confirm the .tar.gz exists
ls -la _build/prod/rel/arweave

# Uncompress the file by specifying the exact file
tar -xvf _build/prod/rel/arweave/arweave-2.3.0.0.tar.gz

# Or for convenience use the * operator to decompress
tar -xvf _build/prod/rel/arweave/*.tar.gz`;

export function CompilingTargz() {
    return(
        <GuideContainer>
            <p>
              While it's not necessary to decompress the tar.gz file as the source files will still be readily available
              in the _build/prod/rel/arweave folder. You may want to migrate the binaries to a different computer.
              Just keep in mind this step isn't necessary unless you intend to migrate the binary to a new computer.
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