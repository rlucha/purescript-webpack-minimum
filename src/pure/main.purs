module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

hello :: forall e. Eff (console :: CONSOLE | e) Unit
hello = do
  log "Hello sailor!"
