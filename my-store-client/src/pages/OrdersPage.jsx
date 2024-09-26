import { ArrowDownward } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";

const OrdersPage = () => {
    return (
        <Box align="center">
            <Typography
                variant= "h4"
                sx={{
                m: "10px",
                textAlign: "center"        
                }}
                >
                Orders history
            </Typography>
            <Box sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper', mt: "10px" }}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ArrowDownward />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                        <Typography sx={{ width: '20%', flexShrink: 0 }}>
                            Order №000000
                        </Typography>
                        <Divider orientation="vertical" flexItem color="green" />
                        <Typography sx={{ width: '20%', flexShrink: 0 }}>Total price: 000.0 $</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};
export default OrdersPage;