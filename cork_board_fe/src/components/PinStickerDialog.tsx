import {Box, Button, Dialog, DialogActions, DialogContent, TextField} from "@mui/material";
import React, {useState} from "react";
import UtilService from "../services/util-service.ts";
import type {Sticker} from "../../../shared/types/AppTypes.ts";
import Logger from "../services/log-service.ts";
import ApiService from "../services/api-service.tsx";
import Routes from "../../../shared/Routes.ts";

interface PinStickerDialogProps {
    isOpened: boolean,
    onClose: () => void
}

const dialogContentTextContentSx = {
    marginTop: "10px",
    width: "100%",
    '& .MuiInputLabel-root': {
        fontFamily: '"Margarine", sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '1.2rem',
    },
    "& .MuiOutlinedInput-notchedOutline legend": {
        width: "95px"
    }
}

const dialogContentTextHeaderSx = {
    marginTop: 0,
    paddingTop: 0,
    '& .MuiInputLabel-root': {
        fontFamily: '"Margarine", sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '1.2rem',
    }
}

const buttonSx = {
    color: 'black',
    fontFamily: '"Margarine", sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '1rem',
    transition: "transform 0.2s ease",
    "&:hover": {
        transform: "scale(1.2)",
        backgroundColor: 'transparent'
    }
};

const PinStickerDialog: React.FC<PinStickerDialogProps> = ({isOpened, onClose}) => {
    const formInitData: Sticker = {id: "", header: "", content: "", ownerIDs: [], isShared: false};
    const [formData, setFormData] = useState<Sticker>(formInitData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value || ""}))
    }
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.header && formData.content) {
            setId(crypto.randomUUID());

            ApiService.post(Routes.createSticker, formData)
                .then(() => {
                    handleClose();
                })
                .catch((err) => {
                    Logger.error(`Unexpected error during sticker creation: ${err}`)
                })
        }
    }

    const handleClose = () => {
        setFormData(formInitData);
        onClose();
    }

    const setId = (id: string) => setFormData((prev) => ({...prev, id: id}))

    return (
        <Box>
            <Dialog open={isOpened}
                    slotProps={{
                        paper: {
                            sx: {
                                backgroundColor: UtilService.colors.mainBackgroundColor
                            }
                        }
                    }}>
                <Box component="form" onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField sx={dialogContentTextHeaderSx}
                                   name="header"
                                   label="Note header"
                                   placeholder="Note header"
                                   type="text"
                                   variant="standard"
                                   fullWidth
                                   margin="normal"
                                   value={formData.header}
                                   onChange={handleChange}/>
                        <TextField sx={dialogContentTextContentSx}
                                   name="content"
                                   label="Note content"
                                   multiline
                                   rows={4}
                                   value={formData.content}
                                   onChange={handleChange}/>
                    </DialogContent>
                    <DialogActions>
                        <Button sx={buttonSx}
                                type="submit"
                                variant="text">
                            Create
                        </Button>
                        <Button sx={buttonSx}
                                onClick={handleClose}
                                autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Box>
    )
}

export default PinStickerDialog
