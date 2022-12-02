import { SxProps } from "@mui/material";
import { grey, blue } from "@mui/material/colors";

export const mycartStyles: SxProps = {
  width: "100%",
  border: `1px solid #DADADA`,
  paddingX: 5,
  boxSizing: "border-box",
  "& .container": {
    fontSize: { xs: "24px", md: "28px" },
    fontWeight: "700",
    lineHeight: "32px",
    color: "black",
  },
  "& .typoHeader": {
    textTransform: "none",
    fontSize: "30px",
    fontWeight: "600",
    lineHeight: "24px",
    my: 4,
    color: blue[700],
  },
  "& .table": {
    minWidth: 500,
  },
  "& .buttonBox": {
    my: "50px",
    pr: { xs: 0, md: 0 },
    display: "flex",
    justifyContent: { xs: "right", sm: "right" },
  },
  "& .textButtonStyle": {
    color: grey[100],
    width: "auto",
    fontSize: "16px",
    fontWeight: "400",
    textTransform: "none",
    textAlign: { xs: "right", md: "left" },
    "&:hover": {
      backgroundColor: blue[600],
      textDecoration: "underline",
      color: grey[100],
    },
  },
};
