import { Box, Skeleton } from "@mui/material";

export default function PreloaderTable() {
  return (
    <>
      <div className="row">
        {[...Array(3)].map((_, index) => (
          <div className="col-lg-4" key={index}>
            <Box sx={{ width: 300 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
        ))}
      </div>
    </>
  );
}
