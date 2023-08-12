import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
          bg: "laranja.500",
        },
        formMain: {
          width: "100%",
          bg: "laranja.500",
          color: "white",
          _hover: {
            bg: "white",
            color: "laranja.500",
            border: "3px solid #FE7E02",
          },
        },
        formSecondary: {
          width: "100%",
          bg: "white",
          color: "laranja.500",
          _hover: {
            fontWeight: "normal",
            color: "black",
            textDecoration: "underline",
            border: "1px solid gray",
          },
        },
        "add-recipe" : {
          borderRadius: "50%",
          fontSize: "1.5rem",
          width: "30px",
          padding: "5px",
          bg: "laranja.500",
          position: "fixed",
          bottom: "15px",
          right: "15"
        }
      },
    },
  },
  colors: {
    laranja: {
      500: "#FE7E02",
    },
  },
});
