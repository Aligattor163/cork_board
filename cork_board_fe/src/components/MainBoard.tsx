import React, {useEffect, useState} from 'react';
import {Box, Fab, Grid, Tooltip, Zoom} from "@mui/material";
import StickerComponent from "./StickerComponent.tsx";
import {AddBox} from "@mui/icons-material";
import PinStickerDialog from "./PinStickerDialog.tsx";
import type {Sticker} from "../../../shared/types/AppTypes.ts";
import ApiService from "../services/api-service.tsx";
import Routes from "../../../shared/Routes.ts";
import Logger from "../services/log-service.ts";
import {useLoadingStore} from "../../stores/loading-store.ts";

const woodTexture: string = "/images/board_border_background.jpg"
const corkTexture: string = "/images/board_background.jpg"

const mainBoardSx = {
    backgroundColor: "#fff",
    p: 2,
}

const boardBorderSx = {
    border: "3px solid #3e2723",
    borderRadius: "20px",
    p: "20px", // board thickness
    boxSizing: "border-box",
    boxShadow: "0 4px 12px rgba(0,0,0,1)",

    backgroundImage: `
                    linear-gradient(
                      135deg,
                      rgba(255,255,255,0.35) 0%,
                      rgba(255,255,255,0.15) 20%,
                      rgba(255,255,255,0) 40%
                    ),
                    linear-gradient(
                      315deg,
                      rgba(0,0,0,0.55) 0%,
                      rgba(0,0,0,0.1) 25%,
                      rgba(0,0,0,0) 50%
                    ),
                    url(${woodTexture})
                 `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundAttachment: "local"
}

const borderBackgroundSx = {
    border: "3px solid #3e2723",
    borderRadius: "10px",
    backgroundImage: `url(${corkTexture})`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundAttachment: "fixed",
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {display: "none"},
    width: "100%",
    height: "calc(100vh - 142px)",
    minHeight: "calc(300px)",
    p: 2,
    boxSizing: "border-box",
    boxShadow: "inset 0 0 20px rgba(0,0,0,1)"
}

const MainBoard: React.FC = () => {
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [stickers, setStickers] = useState<Sticker[]>([] as Sticker[]);

    const handleAddDialogShow = (): void => {
        setShowAddDialog(true);
    }
    const handleAddDialogClose = (): void => {
        setShowAddDialog(false);
        loadStickers();
    }

    const loadStickers = () => {
        useLoadingStore.getState().switchLoading(true);
        ApiService.get(Routes.stickers)
            .then((resp) => {
                setStickers(resp.data as Sticker[]);
            })
            .catch((err) => {
                Logger.error(`Unable to load stickers: <${err}>`);
            })
            .finally(() => useLoadingStore.getState().switchLoading(false))
    }

    useEffect(() => {
        loadStickers();
    }, [])

    return (
        <Box sx={mainBoardSx}>
            <Box id="board_border"
                 sx={boardBorderSx}>
                <Box id="border_background"
                     sx={borderBackgroundSx}>
                    <Grid container spacing={1}>
                        {Array.from(stickers).map((_, index) => (
                            <Grid key={index} size={2}>
                                <StickerComponent headerText={stickers[index].header}
                                                  contentText={stickers[index].content}
                                                  pinColor={undefined}></StickerComponent>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Tooltip title="Pin a new sticker"
                         placement="left"
                         arrow
                         slots={{
                             transition: Zoom
                         }}
                         slotProps={{
                             tooltip: {
                                 sx: {
                                     fontSize: "1rem"
                                 }
                             }
                         }}>
                    <Fab color="default"
                         sx={{
                             position: "fixed",
                             right: "50px",
                             bottom: "50px",
                             opacity: "0.8"
                         }}
                         onClick={handleAddDialogShow}>
                        <AddBox/>
                    </Fab>
                </Tooltip>
            </Box>
            <PinStickerDialog isOpened={showAddDialog}
                              onClose={handleAddDialogClose}/>
        </Box>
    );
};

export default MainBoard;