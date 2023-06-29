import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const DetailCard = styled(Card)({
  maxWidth: 400,
  margin: "0 auto",
  marginTop: 40,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
});

const DetailTitle = styled(Typography)({
  fontSize: 24,
  fontWeight: 600,
  marginBottom: 16,
});

const DetailText = styled(Typography)({
  marginBottom: 8,
});

function MerchDetail(props) {
  const { merch } = props;

  return (
    <DetailCard>
      <CardContent>
        <Box textAlign="center">
          <DetailTitle variant="h5" component="h2">
            Merch Detail
          </DetailTitle>
        </Box>
        <DetailText variant="body1" component="p">
          <strong>Name:</strong> {merch.name}
        </DetailText>
        <DetailText variant="body1" component="p">
          <strong>Description:</strong> {merch.description}
        </DetailText>
        <DetailText variant="body1" component="p">
          <strong>Quantity:</strong> {merch.quantity}
        </DetailText>
        <button type="submit" onClick={props.onClickingEdit}>Update Merch (Details Page)</button>
      </CardContent>
    </DetailCard>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;