import { NavigationContainer } from '../theme/Navigation.theme';

export function Navigation() {
    return(
        <NavigationContainer>
            <a className="link" href="#req">
                Requirements
            </a>
                <a className="link standard" href="#req-compile">
                    For Compilation
                </a>
                <a className="link standard" href="#req-docker">
                    For Docker
                </a>

            <div className="spacer"></div>

            <a className="link" href="#compiling">
                Compilation
            </a>
                <a className="link standard" href="#compiling-rebar">
                    Build with rebar
                </a>
                <a className="link standard" href="#compiling-targz">
                    Decompress tar.gz file
                </a>
                <a className="link standard" href="#compiling-file">
                    File Descriptor Limit
                </a>
                <a className="link standard" href="#compiling-run">
                    Running Commands
                </a>
                <a className="link standard" href="#compiling-mine">
                    Start Mining
                </a>
        </NavigationContainer>
    )
}