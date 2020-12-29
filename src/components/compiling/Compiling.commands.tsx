import style from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Button } from '@chakra-ui/core';
import { GuideContainer } from '../../theme/Guide.theme';

export const Selector = `compiling-run`;
export const Text = `# go to the prod build folder
cd _build/prod/rel/arweave

# Confirm you can run the start command
./bin/start --help

# Should output
Usage: arweave-server [options]
Compatible with network: arweave.N.1
Options:
	config_file (path)                      Load configuration from specified file.
	peer (ip:port)                          Join a network on a peer (or set of peers).
	start_from_block_index                  Start the node from the latest stored block index.
	mine                                    Automatically start mining once the netwok has been joined.
	port                                    The local port to use for mining. This port must be accessible by remote peers.
	data_dir                                The directory for storing the weave and the wallets (when generated).
	metrics_dir                             The directory for persisted metrics.
	polling                                 Poll peers for new blocks every 10 seconds. Useful in environments where port forwarding is not possible. When the flag is not set, the node still polls if it does not receive blocks for a minute.
	clean                                   Clear the block cache before starting.
	no_auto_join                            Do not automatically join the network of your peers.
	mining_addr (addr)                      The address that mining rewards should be credited to.
	max_miners (num)                        The maximum number of mining processes.
	max_emitters (num)                      The maximum number of transaction propagation processes (default 2).
	tx_propagation_parallelization (num)    The maximum number of best peers to propagate transactions to at a time (default 4).
	max_propagation_peers (num)             The maximum number of best peers to propagate blocks and transactions to. Default is 50.
	sync_jobs (num)                         The number of data syncing jobs to run. Default: 2. Each job periodically picks a range and downloads it from peers.
	new_mining_key                          Generate a new keyfile, apply it as the reward address
	load_mining_key (file)                  Load the address that mining rewards should be credited to from file.
	ipfs_pin                                Pin incoming IPFS tagged transactions on your local IPFS node.
	transaction_blacklist (file)            A file containing blacklisted transactions. One Base64 encoded transaction ID per line.
	transaction_blacklist_url               An HTTP endpoint serving a transaction blacklist.
	transaction_whitelist (file)            A file containing whitelisted transactions. One Base64 encoded transaction ID per line. If a transaction is in both lists, it is considered whitelisted.
	transaction_whitelist_url               An HTTP endpoint serving a transaction whitelist.
	disk_space (num)                        Max size (in GB) for the disk partition containing the Arweave data directory (blocks, txs, etc) when the miner stops writing files to disk.
	init                                    Start a new weave.
	internal_api_secret (secret)            Enables the internal API endpoints, only accessible with this secret. Min. 16 chars.
	enable (feature)                        Enable a specific (normally disabled) feature. For example, subfield_queries.
	disable (feature)                       Disable a specific (normally enabled) feature.
	gateway (domain)                        Run a gateway on the specified domain
	custom_domain (domain)                  Add a domain to the list of supported custom domains.
	requests_per_minute_limit (number)      Limit the maximum allowed number of HTTP requests per IP address per minute. Default is 900.
	max_connections                         The number of connections to be handled concurrently. Its purpose is to prevent your system from being overloaded and ensuring all the connections are handled optimally. Default is 1024.
	max_gateway_connections                 The number of gateway connections to be handled concurrently. Default is 128.
	max_poa_option_depth                    The number of PoA alternatives to try until the recall data is found. Has to be an integer > 1. The mining difficulty grows linearly as a function of the alternative as (0.75 + 0.25 * number) * diff, up to (0.75 + 0.25 * max_poa_option_depth) * diff. Default is 500.
	disk_pool_data_root_expiration_time     The time in seconds of how long a pending or orphaned data root is kept in the disk pool. The
				default is 2 * 60 * 60 (2 hours).
	max_disk_pool_buffer_mb                 The max total size in mebibytes of the pending chunks in the disk pool.The default is 2000 (2 GiB).
	max_disk_pool_data_root_buffer_mb       The max size in mebibytes per data root of the pending chunks in the disk pool. The default is 50.
	randomx_bulk_hashing_iterations         The number of hashes RandomX generates before reporting the result back to the Arweave miner. The faster CPU hashes, the higher this value should be.`;

export function CompilingCommands() {
    return(
        <GuideContainer>
            <p>
              Confirm you can run the actual binary in the prod folder. When you run the start binary, it should
              output all the options that you can use to run an Arweave node.
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