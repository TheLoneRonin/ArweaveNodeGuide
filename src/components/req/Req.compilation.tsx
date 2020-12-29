import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Button } from '@chakra-ui/core';
import { GuideContainer } from '../../theme/Guide.theme';

export const Selector = `req-compilation`;
export const Text = `# Get the Erlang Debian package
wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb
sudo dpkg -i erlang-solutions_1.0_all.deb

# Install the Erlang OTP package
sudo apt-get update
sudo apt-get install erlang -y

# Install the rest of the packages
sudo apt-get install gcc clang g++ cmake make libsqlite3-dev -y`;

export function ReqCompilation() {
    return(
        <GuideContainer>
            <p>
              Before we begin, make sure you have the required packages for Erlang, SQLite, GCC, CMake and Make.
              You can install the packages on Ubuntu by running the following snippet.
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