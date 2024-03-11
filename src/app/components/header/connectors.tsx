"use client";

import _ from "lodash";
import { useEffect, useState } from "react";
import { BaseError, useConnect } from "wagmi";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Wallet as WalletIcon } from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";

export default function Connectors(): React.ReactElement | null {
  const [canIUseConnector, updateCanIUseConnector] = useState(false);
  const { connect, connectors, isPending } = useConnect({
    mutation: {
      onSuccess: () => {
        enqueueSnackbar("The wallet was successfully connected!", {
          variant: "success",
        });
      },
      onError: (error) => {
        const { details } = error as BaseError;

        enqueueSnackbar(details, { variant: "error" });
      },
    },
  });
  const [loadingButtonRef, updateLoadingButtonRef] =
    useState<null | HTMLElement>(null);
  const open = Boolean(loadingButtonRef);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    updateLoadingButtonRef(event.currentTarget);
  };

  const handleClose = () => {
    updateLoadingButtonRef(null);
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof (window as any).ethereum !== "undefined"
    ) {
      updateCanIUseConnector(true);
    }
  }, []);

  return canIUseConnector ? (
    <>
      <LoadingButton
        loading={isPending}
        onClick={handleClick}
        startIcon={<WalletIcon />}
        variant="outlined"
        color="inherit"
        sx={{ border: 0 }}
      >
        Connect wallet
      </LoadingButton>
      <Menu
        anchorEl={loadingButtonRef}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        component={List}
        onClose={handleClose}
        open={open}
        sx={{ mt: 1 }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
      >
        {_.map(connectors, (connector) => {
          const { id: key, name, icon } = connector;

          return (
            <ListItemButton
              onClick={() => {
                handleClose();
                connect({ connector });
              }}
              key={key}
            >
              {icon && (
                <ListItemAvatar>
                  <Avatar alt={name} src={icon} />
                </ListItemAvatar>
              )}
              <ListItemText primary={name} secondary={key} />
            </ListItemButton>
          );
        })}
      </Menu>
    </>
  ) : null;
}
