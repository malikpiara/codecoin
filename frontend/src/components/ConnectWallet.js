import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Wallet network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        <div className="col-6 p-4 text-center">
          <h1>CODE Coin</h1>
          <p>Please connect to your wallet.</p>
          <button
            className="btn btn-info btn-lg btn-block"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet ^^
          </button>
        </div>
      </div>
    </div>
  );
}
