import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Article } from "@/sanity/types/schema";

interface Props {
  article: Article;
  isVertical: boolean;
  isDark: boolean;
}

export const CardFooter: React.FC<Props> = ({
  article,
  isVertical,
  isDark,
}) => {
  const theme = useTheme();

  const secondaryTextColor = isDark
    ? "rgba(255,255,255,0.7)"
    : theme.palette.text.secondary;
  const borderIconBgColor = isDark
    ? theme.palette.grey[800]
    : theme.palette.background.paper;
  const iconColor = isDark ? "white" : theme.palette.primary.main;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isVertical ? "column-reverse" : "row",
          gap: 1,
        }}
      >
        <Avatar alt={article.author} />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption" fontWeight={700}>
            por {article.author}
          </Typography>

          {article.publishedAt && (
            <Typography variant="caption" sx={{ color: secondaryTextColor }}>
              {new Date(article.publishedAt).toLocaleDateString("pt-BR", {
                dateStyle: isVertical ? "long" : "short",
              })}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Action Icons */}
      <Box display="flex" gap={2}>
        <Avatar sx={{ backgroundColor: theme.palette.primary.main }}>
          <ShareIcon fontSize="small" htmlColor={iconColor} />
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: borderIconBgColor,
            borderColor: iconColor,
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <MoreHorizIcon fontSize="small" htmlColor={iconColor} />
        </Avatar>
      </Box>
    </Box>
  );
};
