import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Button } from '@chakra-ui/core';
import { GuideContainer } from '../../theme/Guide.theme';

export const Selector = `compiling-filelimit`;
export const Text = `# review your existing file limits
ulimit -a

# update the open file limit to 10240
ulimit -n 10240

# Confirm the open file limit has been updated to 10240
ulimit -n`;

export function CompilingFile() {
    return(
        <GuideContainer>
            <p>
              Given the nature of Arweave. It's very important to update your open file limit to over 10,000. Assuming
              you have access to the ulimit command. Run the following snippet to update your open file limit.
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